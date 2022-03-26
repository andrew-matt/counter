import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    number: number
    maxValue: number
    minValue: number
    increaseNumber: () => void
    resetNumber: () => void
    setValues: (maxValue: number, minValue: number) => void
}

export const Counter = (props: CounterPropsType) => {

    const disabledIncButton = props.number === props.maxValue
    const disabledResetButton = props.number === props.minValue
    const numberClassname = s.number + ' ' + (disabledIncButton && s.numberMax)

    return (
        <div className={s.counter}>
            <div className={numberClassname}>
                {props.number}
            </div>
            <div className={s.buttons}>
                <Button
                    title={"Inc"}
                    callback={props.increaseNumber}
                    disabled={disabledIncButton}
                />
                <Button
                    title={"Reset"}
                    callback={props.resetNumber}
                    disabled={disabledResetButton}
                />
            </div>
        </div>
    );
};
