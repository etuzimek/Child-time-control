import React, {useEffect, useState} from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const API = "http://localhost:3000/tasks";

export default function TaskManager() {
    const [tasksList, setTasksList] = useState(null);
    const getTasks = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("oops...");
            })
            .then(setTasksList)
            .catch((err) => console.log(err));
    };

    useEffect(getTasks, []);

    return (
        <div>
            <AddTask refreshList={getTasks}/>
            <h5>
                {tasksList ? (
                    tasksList.map((taskInfo) => (
                        <Task key={taskInfo.id} task={taskInfo} refreshList={getTasks}/>
                    ))
                ) : (
                    <p>loading tasks...</p>
                )}
            </h5>
        </div>
    );
}

export {API}