import React from 'react'

export default function TodoItem({viewCompleted, newItems, editItem, handleDelete}) {
    return (
        newItems.map(item =>  {
            return(
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span 
                    className={`todo-title mr-2 ${ viewCompleted ? "completed-todo" : ""}`}
                    title={item.title}
                >
                    {item.title}
                </span>
                <span>
                    <button className="btn btn-secondary mr-2" onClick={() => editItem(item)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                        Delete
                    </button>
                </span>
            </li>
            )
        })
    )
}
