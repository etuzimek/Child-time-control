import React from "react";
import {Button} from "react-bootstrap";

const MustDo = () => {
    return (
        <div className="App">
            <h3>Must do <Button variant="dark">Add task ➕</Button></h3>
            <h5>Homework</h5>
            <input type="text" placeholder="What did You do?"/>
            <Button>Add time ⏱️</Button>
            <h5>English lesson</h5>
            <input type="text" placeholder="What did You learn?"/>
            <Button>Add time ⏱️</Button>
            <h5>Physical activity</h5>
            <input type="text" placeholder="What was Your activity"/>
            <Button>Add time ⏱️</Button>
            <h5>Room cleaning</h5>
            <Button>Add time ⏱️</Button>
            <h5>A walk with the dog</h5>
            <Button>Add time ⏱️</Button>
        </div>
    );
};

export default MustDo;