import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    number: number
    increaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: CounterPropsType) => {

    const disabledIncButton = props.number === 5
    const disabledResetButton = props.number === 0
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
