import React, {ChangeEvent} from "react";

type InputPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

export const Input: React.FC<InputPropsType> = React.memo((props) => {
    return (
        <input
            type="number"
            value={props.value}
            className={props.className}
            onChange={props.onChange}
        />
    )
})