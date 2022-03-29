import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
            <button onClick={props.callback} className={s.button}>{props.title}</button>
    );
};
