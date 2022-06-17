import style from "./settings.module.css";
import React, {ChangeEvent, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, store} from "../../bll/store";
import {
    changeSettings,
    setMaxValue,
    setMaxValueError,
    setStartValue,
    setStartValueError,
    setValue
} from "../../bll/counter-reducer";
import {Button} from "../button/Button";
import {Input} from "../input/Input";

export const Settings = React.memo(() => {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValueError = useSelector<AppStateType, boolean>(state => state.counter.maxValueError)
    const startValueError = useSelector<AppStateType, boolean>(state => state.counter.startValueError)

    const error = maxValueError || startValueError

    const dispatch = useDispatch()

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = e.currentTarget.valueAsNumber
        if (maxValue < 1 || maxValue <= startValue) {
            dispatch(changeSettings(false))
            dispatch(setMaxValueError(true))
            dispatch(setStartValueError(true))
        } else if (maxValue >= 1 && maxValue > startValue && startValue >= 0) {
            dispatch(setMaxValueError(false))
            dispatch(setStartValueError(false))
            dispatch(changeSettings(true))
        } else if (maxValue >= 1 && maxValue > startValue) {
            dispatch(setMaxValueError(false))
        }
        dispatch(setMaxValue(maxValue))
    }

    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = e.currentTarget.valueAsNumber;
        if (startValue < 0) {
            dispatch(changeSettings(false))
            dispatch(setStartValueError(true))
        } else if (startValue >= maxValue) {
            dispatch(changeSettings(false))
            dispatch(setStartValueError(true))
            dispatch(setMaxValueError(true))
        } else if (startValue >= 0 && startValue < maxValue) {
            dispatch(setStartValueError(false))
            dispatch(setMaxValueError(false))
            dispatch(changeSettings(true))
        }
        dispatch(setStartValue(startValue))
        dispatch(setValue(startValue))
    }

    const onSetButtonClickHandler = useCallback(() => {
        localStorage.setItem('max-value', JSON.stringify(store.getState().counter.maxValue))
        localStorage.setItem('start-value', JSON.stringify(store.getState().counter.startValue))
        dispatch(changeSettings(false))
    }, [dispatch])

    return (
        <div className={style.settingsContainer}>
            <div className={style.inputsContainer}>
                <div className={style.inputContainer}>
                    max value:
                    <Input
                        value={maxValue}
                        onChange={setMaxValueHandler}
                        className={`${style.input} ${maxValueError && style.inputError}`}
                    />
                </div>
                <div className={style.inputContainer}>
                    start value:
                    <Input
                        value={startValue}
                        onChange={setStartValueHandler}
                        className={`${style.input} ${startValueError && style.inputError}`}
                    />
                </div>
            </div>
            <div className={style.buttonContainer}>
                <Button
                    callback={onSetButtonClickHandler}
                    disabled={error}
                    title={"set"}
                />
            </div>
        </div>
    )
})