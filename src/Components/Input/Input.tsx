import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value: number
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputPropsType> = (props) => {

    const inputClass = `${s.input} + ${props.className}`

    return (
        <input
            type="number"
            value={props.value}
            className={inputClass}
            onChange={props.onChange}
        />
    );
};
