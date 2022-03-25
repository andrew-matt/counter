import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export function Button(props: ButtonPropsType) {
    return (
            <button
                disabled={props.disabled}
                onClick={props.callback}
                className={s.button}
            >
                {props.title}
            </button>
    );
}
