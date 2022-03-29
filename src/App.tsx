import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    return (
        <div className="App">
            <Settings/>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    )
}

export default App;

