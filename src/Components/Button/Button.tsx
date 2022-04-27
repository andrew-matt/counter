import React, {useState} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const [buttonClass, setButtonClass] = useState(s.button)

    const onMouseDown = () => {
        setButtonClass(s.button + " " + s.button_clicked)
    }

    const onMouseUp = () => {
        setButtonClass(s.button)
    }

    return (
        <button
            onClick={props.callback}
            disabled={props.disabled}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className={buttonClass}
        >{props.title}
        </button>
    );
};
