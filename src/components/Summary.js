import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {API} from "./MustDo";

const Summary = () => {
    const [price, setPrice] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const checkPrice = () => {
        setIsShown(current => !current);

        setTimeout(function () {
            console.log('Działa')
        }, 5000);
    }

    useEffect(() => {
        fetch(API).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("oops...")
        })
            .then(data => {
                setPrice(data)
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className="App">
            <Button onClick={checkPrice} variant="success" size="lg">Let's check the price</Button>
            {price ? price.map(({id, name, time}) =>
                <div key={id} style={{display: isShown ? 'block' : 'none'}}>
                    <h6>{name} = {time} minutes</h6>
                </div>
            ) : (
                <p>loading..</p>
            )}
        </div>
    );
};

export default Summary;