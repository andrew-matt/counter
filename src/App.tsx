import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {

    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let minValue = JSON.parse(valueAsString)
            setNumber(minValue)
        }
    }, [])

    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)
    const [number, setNumber] = useState(minValue)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const resetNumber = () => {
        setNumber(minValue)
    }

    const setValues = (maxValue: number, minValue: number) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
    }

    return (
        <div className="App">
            <Settings
                setValues={setValues}
                setNumber={setNumber}
            />
            <Counter
                number={number}
                maxValue={maxValue}
                minValue={minValue}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                setValues={setValues}
            />
        </div>
    )
}

export default App;

