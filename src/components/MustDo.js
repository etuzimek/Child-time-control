import React, {useEffect, useState} from "react";
// import {Button} from "react-bootstrap";
import Button from "../components/Button"

export const API = "http://localhost:3000/taskTime";

const MustDo = () => {
    const [homework, setHomework] = useState("");
    const [english, setEnglish] = useState("");
    const [physical, setPhysical] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(API).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("oops...")
        })
            .then(data => {
                console.log(data)
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (homework.length < 10) {
            _errors.push("Please write more than 10 letters in homework.");
        }

        if (english.length < 10) {
            _errors.push("Please write more than 10 letters in English.");
        }

        if (physical.length < 10) {
            _errors.push("Please write more than 10 letters in Physical activity.");
        }

        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
            return false;
        }
    }

    return (
        <div className="App">
            <h3>Must do <Button variant="dark">Add task ➕</Button></h3>
            <h5>Homework</h5>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={homework}
                    onChange={e => setHomework(e.target.value)}/>
                <h5>{homework}</h5>
                <Button>Please confirm</Button>
            </form>
            <Button
                color={"primary"}
                small
                outline
                // onClick={() => setTimeSpentForm(true)}
            >
                Add time ⏱
            </Button>
            <h5>English lesson</h5>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={english}
                    onChange={e => setEnglish(e.target.value)}/>
            </form>
            <Button
                color={"primary"}
                small
                outline
                // onClick={() => setTimeSpentForm(true)}
            >
                Add time ⏱
            </Button>
            <h5>Physical activity</h5>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={physical}
                    onChange={e => setPhysical(e.target.value)}/>
            </form>
            <Button
                color={"primary"}
                small
                outline
                // onClick={() => setTimeSpentForm(true)}
            >
                Add time ⏱
            </Button>
            {success && <h2>Form sent!</h2>}
            {errors.map(error => <p key={error}>{error}</p>)}
        </div>
    );
};
export default MustDo;