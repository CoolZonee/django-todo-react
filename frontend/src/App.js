import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CustomModal from './components/Modal';
import todoService from './services/todo.service';

function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({title: "", description: "", completed: false});

  useEffect(() => {
    refreshList()
  }, [])

  const refreshList = () => {
    todoService.getAll().then(res => setTodoList(res.data));
  };

  const displayCompleted = (status) => {
    if (status) {
    setViewCompleted(true);
    return
    }
    setViewCompleted(false);
  };

  const toggle = () => setModal(!modal);

  const handleSubmit = (item) => {
    toggle();
    if (item.id) {
      todoService.update(item.id, item).then(res => refreshList());
      return
    }
    todoService.create(item).then(res => refreshList());
  };

  const handleDelete = (item) => {
    todoService.delete(item.id).then(res => refreshList());
  };

  const createItem = () => {
    const item = {title: "", description: "", completed: false};
    setActiveItem(item);
    setModal(!modal);
  };

  const editItem = (item) => {
    setActiveItem(item);
    setModal(!modal);
  }

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button className="btn-primary btn" onClick={createItem}>Add task</button>
            </div>
            <TodoList 
              displayCompleted={displayCompleted} 
              viewCompleted={viewCompleted}
            />
            <ul className="list-group list-group-flush border-top-0">
              <TodoItem 
                viewCompleted={viewCompleted} 
                newItems={todoList.filter(todo => todo.completed === viewCompleted)} 
                editItem={editItem} 
                handleDelete={handleDelete} 
              />
            </ul>
          </div>
        </div>
      </div>
      {modal ? (<CustomModal 
                  activeItem={activeItem}
                  toggle={toggle}
                  onSave={handleSubmit}
                />): null}
    </main>
  );
}

export default App;
