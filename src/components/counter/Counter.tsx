import style from "./counter.module.css";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {incValue, resetValue} from "../../bll/counter-reducer";
import {Button} from "../button/Button";

export const Counter = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValueError = useSelector<AppStateType, boolean>(state => state.counter.maxValueError)
    const startValueError = useSelector<AppStateType, boolean>(state => state.counter.startValueError)
    const settingsChanged = useSelector<AppStateType, boolean>(state => state.counter.settingsChanged)

    const error = maxValueError || startValueError

    const dispatch = useDispatch()

    const valueContainerClass = `${style.valueContainer}
     ${!settingsChanged && value === maxValue && style.valueContainerMaxValue} 
     ${settingsChanged && style.valueContainerChangeSettings}
     ${error && style.valueContainerError}`

    const incHandler = useCallback(() => {
        dispatch(incValue())
    }, [dispatch])

    const resetHandler = useCallback(() => {
        dispatch(resetValue())
    }, [dispatch])

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