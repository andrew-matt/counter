import style from "./input.module.css";
import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

type InputPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

export const Input: React.FC<InputPropsType> = React.memo((props) => {
    const maxValueError = useSelector<AppStateType, boolean>(state => state.counter.maxValueError)
    const startValueError = useSelector<AppStateType, boolean>(state => state.counter.startValueError)

    const error = maxValueError || startValueError

    return (
        <input
            type="number"
            value={props.value}
            className={props.className}
            onChange={props.onChange}
        />
    )
})