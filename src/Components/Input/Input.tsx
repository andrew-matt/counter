import React from 'react';
import s from './Input.module.css'

type InputPropsType = {
    callback: () => void
}

export function Input(props: InputPropsType) {
    return (
        <input
            type="number"
            value={0}
            className={s.input}
        />
    );
}
