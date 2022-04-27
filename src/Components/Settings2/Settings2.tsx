import React, {ChangeEvent} from "react";
import settings2Styles from "./Settings2.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type SettingsPropsType = {
    inputMaxValue: number
    inputMinValue: number
    inputMaxClass: string
    inputMinClass: string
    onMaxValueInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onMinValueInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputMaxValueError: boolean
    inputMinValueError: boolean
    onSetButtonClick: () => void
}

export function Settings2(props: SettingsPropsType) {
    return (
        <div className={settings2Styles.settings2_window}>
            <div className={settings2Styles.inputs_window}>
                <div className={settings2Styles.input_div}>
                    max value:
                    <Input
                        value={props.inputMaxValue}
                        className={props.inputMaxClass}
                        onChange={props.onMaxValueInputChange}
                    />
                </div>
                <div className={settings2Styles.input_div}>
                    start value:
                    <Input
                        value={props.inputMinValue}
                        className={props.inputMinClass}
                        onChange={props.onMinValueInputChange}
                    />
                </div>
            </div>
            <div className={settings2Styles.button_window}>
                <Button
                    callback={props.onSetButtonClick}
                    disabled={props.inputMaxValue === props.inputMinValue || props.inputMaxValueError || props.inputMinValueError}
                    title={"set"}
                />
            </div>
        </div>
    )
}