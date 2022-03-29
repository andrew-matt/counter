import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={s.value}>
                {props.startValue}
            </div>
            <div className={s.buttons}>
                <Button title={"Inc"} callback={() => {}}/>
                <Button title={"Reset"} callback={() => {}}/>
            </div>
        </div>
    );
};
