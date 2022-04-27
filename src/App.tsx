import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import counterStyles from './Components/Counter/Counter.module.css'
import inputStyles from './Components/Input/Input.module.css'
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";
import {Counter2} from "./Components/Counter2/Counter2";
import {Settings2} from "./Components/Settings2/Settings2";

function App() {

    useEffect(() => {
        const valueAsString = localStorage.getItem('inputMaxValue')
        if (valueAsString) {
            const valueAsNumber = Number(localStorage.getItem('inputMaxValue'))
            setInputMaxValue(valueAsNumber)
            setMaxValue(valueAsNumber)
        }
    }, [])

    useEffect(() => {
        const valueAsString = localStorage.getItem('inputMinValue')
        if (valueAsString) {
            const valueAsNumber = Number(localStorage.getItem('inputMinValue'))
            setInputMinValue(valueAsNumber)
            setStartValue(valueAsNumber)
            setNumber(valueAsNumber)
        }
    }, [])

    const [inputMaxValue, setInputMaxValue] = useState(5)
    const [inputMinValue, setInputMinValue] = useState(0)
    const [startValue, setStartValue] = useState(inputMinValue)
    const [maxValue, setMaxValue] = useState(inputMaxValue)
    const [number, setNumber] = useState(inputMinValue)
    const [inputChange, setInputChange] = useState(false)
    const [inputMaxValueError, setInputMaxValueError] = useState(false)
    const [inputMinValueError, setInputMinValueError] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const inputMaxClass = `${inputMaxValueError && inputStyles.input_max_value_error}`
    const inputMinClass = `${inputMinValueError && inputStyles.input_min_value_error}`
    const numberClass = `${counterStyles.counter_number_window} 
    + ${inputMaxValueError && counterStyles.counter_number_error}
    + ${inputMinValueError && counterStyles.counter_number_error}
    + ${inputChange && counterStyles.counter_number_text}
    + ${number === maxValue && counterStyles.counter_number_max}`

    const onIncClickHandler = () => {
        setNumber(number + 1)
    }

    const onResetClickHandler = () => {
        setNumber(inputMinValue)
    }

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        setInputMaxValue(value)
        setInputChange(true)
        if (value < 1 || value <= inputMinValue) {
            setInputMaxValueError(true)
            setInputChange(false)
        } else if (value > 0 && value > inputMinValue) {
            setInputMaxValueError(false)
            if (inputMinValue >= 0) {
                setInputMinValueError(false)
            }
        }
    }

    const onMinValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        setInputMinValue(value)
        setInputChange(true)
        if (value < 0 || value >= inputMaxValue) {
            setInputMinValueError(true)
            setInputChange(false)
        } else if (value >= 0 && value < inputMaxValue) {
            setInputMinValueError(false)
            setInputMaxValueError(false)
        }
    }

    const onSetButtonClick = () => {
        setInputChange(false)
        setInputMaxValueError(false)
        setInputMinValueError(false)
        setStartValue(inputMinValue)
        setMaxValue(inputMaxValue)
        setNumber(inputMinValue)
        localStorage.setItem('inputMaxValue', String(inputMaxValue))
        localStorage.setItem('inputMinValue', String(inputMinValue))
    }

    const onSet2ButtonClick = () => {
        setInputChange(false)
        setInputMaxValueError(false)
        setInputMinValueError(false)
        setStartValue(inputMinValue)
        setMaxValue(inputMaxValue)
        setNumber(inputMinValue)
        localStorage.setItem('inputMaxValue', String(inputMaxValue))
        localStorage.setItem('inputMinValue', String(inputMinValue))
        setShowSettings(false)
    }

    const onSetClickHandler = () => {
        setShowSettings(true)
    }

    return (
        <div className="App">
            {
                showSettings
                    ? <Settings2
                        inputMaxValue={inputMaxValue}
                        inputMinValue={inputMinValue}
                        inputMaxClass={inputMaxClass}
                        inputMinClass={inputMinClass}
                        onMaxValueInputChange={onMaxValueInputChange}
                        onMinValueInputChange={onMinValueInputChange}
                        inputMaxValueError={inputMaxValueError}
                        inputMinValueError={inputMinValueError}
                        onSetButtonClick={onSet2ButtonClick}
                    />
                    : <Counter2
                        number={number}
                        numberClass={numberClass}
                        startValue={startValue}
                        maxValue={maxValue}
                        inputChange={inputChange}
                        inputMaxValueError={inputMaxValueError}
                        inputMinValueError={inputMinValueError}
                        onIncClickHandler={onIncClickHandler}
                        onResetClickHandler={onResetClickHandler}
                        onSetClickHandler={onSetClickHandler}
                    />
            }
            {/*<Settings
                inputMaxValue={inputMaxValue}
                inputMinValue={inputMinValue}
                inputMaxClass={inputMaxClass}
                inputMinClass={inputMinClass}
                onMaxValueInputChange={onMaxValueInputChange}
                onMinValueInputChange={onMinValueInputChange}
                inputMaxValueError={inputMaxValueError}
                inputMinValueError={inputMinValueError}
                onSetButtonClick={onSetButtonClick}
            />*/}
            {/*<Counter*/}
            {/*    number={number}*/}
            {/*    numberClass={numberClass}*/}
            {/*    startValue={startValue}*/}
            {/*    maxValue={maxValue}*/}
            {/*    inputChange={inputChange}*/}
            {/*    inputMaxValueError={inputMaxValueError}*/}
            {/*    inputMinValueError={inputMinValueError}*/}
            {/*    onIncClickHandler={onIncClickHandler}*/}
            {/*    onResetClickHandler={onResetClickHandler}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
