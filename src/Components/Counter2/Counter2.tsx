import counter2Styles from "./Counter2.module.css";
import {Button} from "../Button/Button";
import React from "react";

type CounterPropsType = {
    number: number
    numberClass: string
    startValue: number
    maxValue: number
    inputChange: boolean
    inputMaxValueError: boolean
    inputMinValueError: boolean
    onIncClickHandler: () => void
    onResetClickHandler: () => void
    onSetClickHandler: () => void
}

export function Counter2(props: CounterPropsType) {
    return (
        <div className={counter2Styles.counter2_window}>
            <div className={props.numberClass}>
                {
                    props.inputChange && !props.inputMaxValueError && !props.inputMinValueError
                        ? "enter values and press 'set'"
                        : props.inputMaxValueError
                            ? "Incorrect value!"
                            : props.inputMinValueError
                                ? "Incorrect value!"
                                : props.number
                }
            </div>
            <div className={counter2Styles.counter_buttons_window}>
                <Button
                    callback={props.onIncClickHandler}
                    disabled={props.number === props.maxValue || props.inputChange || props.inputMaxValueError || props.inputMinValueError}
                    title={"inc"}
                />
                <Button
                    callback={props.onResetClickHandler}
                    disabled={props.number === props.startValue || props.inputChange || props.inputMaxValueError || props.inputMinValueError}
                    title={"reset"}
                />
                <Button
                    callback={props.onSetClickHandler}
                    disabled={false}
                    title={"set"}
                />
            </div>
        </div>
    )
}