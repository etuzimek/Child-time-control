import React, {useState} from 'react';
import {API} from "./TaskManager"
import {Button, Form, InputGroup} from "react-bootstrap";

function AddTask({refreshList}) {
    const [task, setTask] = useState({
        type: "",
        name: "",
        time: ""
    })

    const addTask = (e) => {
        e.preventDefault();
        fetch(API, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                refreshList()
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <h3>What did You do today?</h3>
            <InputGroup>
                <Form.Select aria-label="Default select example" type="text" value={task.type} onChange={e =>
                    setTask({
                        ...task,
                        type: e.target.value
                    })}>
                    <option>Open this select menu</option>
                    <option value="must do">Must do</option>
                    <option value="free time">Free time</option>
                </Form.Select>
                <Form.Control placeholder="name of task" type="text" value={task.name} onChange={e =>
                    setTask({
                        ...task,
                        name: e.target.value
                    })}/>
                <Form.Control placeholder="time" type="number" value={task.time} onChange={e =>
                    setTask({
                        ...task,
                        time: parseInt(e.target.value)
                    })}/>
                <Button onClick={addTask}>Add</Button>
            </InputGroup>
        </>
    );
}

export default AddTask;