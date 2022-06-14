import style from "./button.module.css";
import React from "react";

type ButtonPropsType = {
    callback: () => void
    disabled: boolean
    title: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button
            onClick={props.callback}
            disabled={props.disabled}
            className={style.button}
        >
            {props.title}
        </button>
    )
}