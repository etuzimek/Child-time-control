import React, {useState} from "react";
import './App.css';
import Summary from "./components/Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";
import TaskManager from "./components/TaskManager";
import Prices from "./components/Prices";

function App(props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div className="App">
            <Container>
                <h1>Hello Alan!</h1>
                <Button onClick={handleClick} variant="success" size="lg">Click Me!!!</Button>
                <div style={{display: isShown ? 'block' : 'none'}}>
                    <TaskManager/>
                    <Summary/>
                    {/*<Prices/>*/}
                </div>
            </Container>
        </div>
    );
}

export default App;
