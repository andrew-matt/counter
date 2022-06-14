import style from "./input.module.css";
import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

type InputPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputPropsType> = (props) => {

    const error = useSelector<AppStateType, boolean>(state => state.counter.error)

    return (
        <input
            type="number"
            value={props.value}
            className={`${style.input} ${error && style.inputError}`}
            onChange={props.onChange}
        />
    )
}