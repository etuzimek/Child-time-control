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
            <InputGroup onSubmit={addTask}>
                {/*<Form.Control placeholder="must do or free time" type="text" value={task.type} onChange={e =>*/}
                {/*    setTask({*/}
                {/*        ...task,*/}
                {/*        type:e.target.value*/}
                {/*    })}/>*/}
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Must do</option>
                    <option value="2">Free time</option>
                </Form.Select>
                <Form.Control placeholder="name of task" type="text" value={task.name} onChange={e =>
                    setTask({
                        ...task,
                        name: e.target.value
                    })}/>
                <Form.Control placeholder="time" type="number" value={task.time} onChange={e =>
                    setTask({
                        ...task,
                        time:e.target.value
                    })}/>
                <Button>Add</Button>
            </InputGroup>
        </>
    );
}

export default AddTask;