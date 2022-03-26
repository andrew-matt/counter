import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";

type SettingsPropsType = {
    setValues: (maxValue: number, minValue: number) => void
    setNumber: (number: number) => void
}

export function Settings(props: SettingsPropsType) {

    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
    }

    const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(e.currentTarget.value))
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let maxValue = JSON.parse(valueAsString)
            setMaxValue(maxValue)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let minValue = JSON.parse(valueAsString)
            setMinValue(minValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [minValue])

    const onSetButtonClickHandler = () => {
        props.setValues(maxValue, minValue)
        props.setNumber(minValue)
    }

    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div className={s.maxValue}>
                    max value:
                    <input value={maxValue} type="number" className={s.input} onChange={onMaxValueChangeHandler}/>
                </div>
                <div className={s.minValue}>
                    min value:
                    <input value={minValue} type="number" className={s.input} onChange={onMinValueChangeHandler}/>
                </div>
            </div>
            <div className={s.setButton}>
                <Button title={"Set"} callback={onSetButtonClickHandler} disabled={false}/>
            </div>
        </div>
    );
};

