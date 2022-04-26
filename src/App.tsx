import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from './Counter.module.css'
import styles from './Settings.module.css'

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
    const [setButtonClicked, setSetButtonClicked] = useState(false)
    const [incButtonClicked, setIncButtonClicked] = useState(false)
    const [resetButtonClicked, setResetButtonClicked] = useState(false)
    const [inputChange, setInputChange] = useState(false)
    const [inputMaxValueError, setInputMaxValueError] = useState(false)
    const [inputMinValueError, setInputMinValueError] = useState(false)

    const inputMaxClass = `${styles.input} + ${inputMaxValueError && styles.input_max_value_error}`
    const inputMinClass = `${styles.input} + ${inputMinValueError && styles.input_min_value_error}`
    const numberClass = `${s.counter_number_window} 
    + ${inputMaxValueError && s.counter_number_error}
    + ${inputMinValueError && s.counter_number_error}
    + ${inputChange && s.counter_number_text}
    + ${number === maxValue && s.counter_number_max}`
    const setClass = styles.set_button + " " + (setButtonClicked && styles.clicked)
    const incClass = s.counter_button + " " + (incButtonClicked && s.clicked)
    const resetClass = s.counter_button + " " + (resetButtonClicked && s.clicked)

    const onIncClickHandler = () => {
        setNumber(number + 1)
    }

    const onResetClickHandler = () => {
        setNumber(inputMinValue)
    }

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(e.currentTarget.value))
        setInputChange(true)
        if (Number(e.currentTarget.value) < 1 || Number(e.currentTarget.value) <= inputMinValue) {
            setInputMaxValueError(true)
            setInputChange(false)
        } else if (Number(e.currentTarget.value) > 0 && Number(e.currentTarget.value) > inputMinValue) {
            setInputMaxValueError(false)
            if (inputMinValue >= 0) {
                setInputMinValueError(false)
            }
        }
    }

    const onMinValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(Number(e.currentTarget.value))
        setInputChange(true)
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= inputMaxValue) {
            setInputMinValueError(true)
            setInputChange(false)
        } else if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < inputMaxValue) {
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

    return (
        <div className="App">
            <div className={styles.settings_window}>
                <div className={styles.inputs_window}>
                    <div className={styles.input_div}>
                        max value:
                        <input
                            type="number"
                            value={inputMaxValue}
                            className={inputMaxClass}
                            onChange={onMaxValueInputChange}
                        />
                    </div>
                    <div className={styles.input_div}>
                        start value:
                        <input
                            type="number"
                            value={inputMinValue}
                            className={inputMinClass}
                            onChange={onMinValueInputChange}
                        />
                    </div>
                </div>
                <div className={styles.button_window}>
                    <button
                        onClick={onSetButtonClick}
                        disabled={inputMaxValue === inputMinValue || inputMaxValueError || inputMinValueError}
                        onMouseDown={() => setSetButtonClicked(true)}
                        onMouseUp={() => setSetButtonClicked(false)}
                        className={setClass}
                    >set
                    </button>
                </div>
            </div>
            <div className={s.counter_window}>
                <div className={numberClass}>
                    {
                        inputChange && !inputMaxValueError && !inputMinValueError
                            ? "enter values and press 'set'"
                            : inputMaxValueError
                                ? "Incorrect value!"
                                : inputMinValueError
                                    ? "Incorrect value!"
                                    : number
                    }
                </div>
                <div className={s.counter_buttons_window}>
                    <button
                        onClick={onIncClickHandler}
                        disabled={number === maxValue || inputChange || inputMaxValueError || inputMinValueError}
                        onMouseDown={() => setIncButtonClicked(true)}
                        onMouseUp={() => setIncButtonClicked(false)}
                        className={incClass}
                    >inc
                    </button>
                    <button
                        onClick={onResetClickHandler}
                        disabled={number === startValue || inputChange || inputMaxValueError || inputMinValueError}
                        onMouseDown={() => setResetButtonClicked(true)}
                        onMouseUp={() => setResetButtonClicked(false)}
                        className={resetClass}
                    >reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
