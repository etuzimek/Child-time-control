import React, {useState} from "react";
import './App.css';
import FreeTime from "./components/FreeTime";
import MustDo from "./components/MustDo";
import Summary from "./components/Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";
import TaskManager from "./components/TaskManager";

function App(props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div className="App">
            <Container>
                <h1>Hello Alan!</h1>
                <Button onClick={handleClick} variant="success" size="lg">Press the button 😊</Button>
                <div style={{display: isShown ? 'block' : 'none'}}>
                    {/*<MustDo/>*/}
                    {/*<FreeTime/>*/}
                    <TaskManager/>
                    <Summary/>
                </div>
            </Container>
        </div>
    );
}

export default App;
