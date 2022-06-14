import style from "./counter.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {incValue, resetValue} from "../../bll/counter-reducer";
import {Button} from "../button/Button";

export const Counter = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const settingsChanged = useSelector<AppStateType, boolean>(state => state.counter.settingsChanged)

    const dispatch = useDispatch()

    const valueContainerClass = `${style.valueContainer}
     ${!settingsChanged && value === maxValue && style.valueContainerMaxValue} 
     ${settingsChanged && style.valueContainerChangeSettings}
     ${error && style.valueContainerError}`

    const incHandler = () => {
        dispatch(incValue())
    }

    const resetHandler = () => {
        dispatch(resetValue())
    }

    return (
        <div className={style.counterContainer}>
            <div className={valueContainerClass}>
                {
                    settingsChanged
                        ? `enter values and press 'set'`
                        : error
                            ? `Incorrect value!`
                            : value
                }
            </div>
            <div className={style.buttonsContainer}>
                <Button
                    callback={incHandler}
                    disabled={value === maxValue || error || settingsChanged}
                    title={"inc"}
                />
                <Button
                    callback={resetHandler}
                    disabled={value === startValue || error || settingsChanged}
                    title={"reset"}
                />
            </div>
        </div>
    )
}