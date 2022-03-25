import React from 'react';
import {Button} from "../Button/Button";

type CounterPropsType = {
    number: number
    increaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div>
            {props.number}
            <Button title={"Inc"} callback={props.increaseNumber}/>
            <Button title={"Reset"} callback={props.resetNumber}/>
        </div>
    );
};
