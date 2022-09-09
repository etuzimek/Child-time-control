import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {API} from "./TaskManager";

const Summary = () => {
    const [taskShow, setTaskShow] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const summaryCheck = () => {
        setIsShown(current => !current);
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("oops...");
            })
            .then(setTaskShow)
            .catch((err) => console.log(err));
    };

    let productiveTime = 0;
    let notProductiveTime = 0;

    taskShow?.forEach(item => {
        if (item.type === "must do") {
            productiveTime += item.time;
        } else {
            notProductiveTime += item.time;
        }

    });

    useEffect(summaryCheck, []);

    const Price = productiveTime / notProductiveTime * 100;

    return (
        <div className="App">
            <Button onClick={summaryCheck} variant="success" size="lg">Summary check</Button>
            <div style={{display: isShown ? 'block' : 'none'}}>
                <h6>Proportion productive tasks to not productive is {Math.round(Price)}%</h6>
            </div>
        </div>
    );
};

export default Summary;