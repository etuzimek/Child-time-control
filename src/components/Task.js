import React, {useState} from 'react';
import {API} from "./TaskManager"
import {Button} from "react-bootstrap";

function EditTask({taskToEdit, onEditTask}) {
    const [task, setTask] = useState(taskToEdit)

    const editTask = (e) => {
        e.preventDefault();
        fetch(API + `/${task.id}`, {
            method: "PUT",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                onEditTask()
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={editTask}>
            <input type="text" value={task.name} onChange={e => setTask({
                ...task,
                name: e.target.value
            })}/>
            <button>Add</button>
        </form>
    );
}

function Task({task, refreshList}) {
    const [isEditable, setIsEditable] = useState(false)

    const deleteTask = (taskId) => {
        console.log("delete task id:", taskId);
        fetch(API + `/${taskId}`, { method: "DELETE" }).then((res) => {
            if (res.ok) {
                refreshList();
            }
        });
    };
    if(isEditable) {
        return <EditTask taskToEdit={task} onEditTask={() => {
            refreshList();
            setIsEditable(false);
        }
        }/>
    }
    return (
        <div>
            {task.name} {task.time}
            <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}>delete</Button>
            <Button size="sm" onClick={() => setIsEditable(true)}>Edit</Button>
        </div>
    );
}

export default Task;