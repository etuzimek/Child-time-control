import React from "react";
import './App.css';
import FreeTime from "./components/FreeTime";
import MustDo from "./components/MustDo";
import Summary from "./components/Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";

const API = "http://localhost:3000";

fetch(`${API}/db`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

function App() {
    return (
        <div className="App">
            <Container>
                <h1>Hello Alan!</h1>
                <Button variant="success" size="lg">Press the button 😊</Button>
                <MustDo></MustDo>
                <FreeTime></FreeTime>
                <Summary></Summary>
            </Container>
        </div>
    );
}

export default App;
