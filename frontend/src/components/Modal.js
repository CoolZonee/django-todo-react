import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

export default function CustomModal({activeItem, toggle, onSave}) {
    const [item, setItem] = useState(activeItem);

    const handleChange = (e) => {
        let { name, value } = e.target;

        if(e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...item, [name]: value };

        setItem(activeItem);
    };

    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                    Todo Item
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="todo-title">Title</Label>
                        <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={item.title}
                            onChange={handleChange}
                            placeholder="Enter Todo Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo-description">Description</Label>
                        <Input
                            type="text"
                            id="todo-description"
                            name="description"
                            value={item.description}
                            onChange={handleChange}
                            placeholder="Enter Todo description"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                            type="checkbox"
                            name="completed"
                            checked={item.completed}
                            onChange={handleChange}
                            />
                            Completed
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => onSave(item)}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}
