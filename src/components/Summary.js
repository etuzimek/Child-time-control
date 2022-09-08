import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {API} from "./TaskManager";

const Summary = () => {
    const [taskShow, setTaskShow] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const summaryCheck = () => {
        setIsShown(current => !current);
        fetch(`${API}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("oops...");
            })
            .then(setTaskShow)
            .catch((err) => console.log(err));
    };

    useEffect(summaryCheck,[]);

    return (
        <div className="App">
            <Button onClick={summaryCheck} variant="success" size="lg">Summary check</Button>
            <div style={{display: isShown ? 'block' : 'none'}}>
                <h6>You earn points</h6>
                <h6>
                    {taskShow ? (
                        taskShow.map((ta) => <p key={ta.id}>{ta.time}</p>)
                    ) : (
                        <p>loading...</p>
                    )}
                </h6>
            </div>
        </div>
    );
};

export default Summary;