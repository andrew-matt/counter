import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";

function App() {

    const [number, setNumber] = useState(0)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const resetNumber = () => {
        setNumber(0)
    }

    return (
        <div className="App">
            <Counter
                number={number}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
            />
        </div>
    )
}

export default App;

