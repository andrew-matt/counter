import React, {ChangeEvent} from "react";
import settingsStyles from "./Settings.module.css";
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

export function Settings(props: SettingsPropsType) {
    return (
        <div className={settingsStyles.settings_window}>
            <div className={settingsStyles.inputs_window}>
                <div className={settingsStyles.input_div}>
                    max value:
                    <Input
                        value={props.inputMaxValue}
                        className={props.inputMaxClass}
                        onChange={props.onMaxValueInputChange}
                    />
                </div>
                <div className={settingsStyles.input_div}>
                    start value:
                    <Input
                        value={props.inputMinValue}
                        className={props.inputMinClass}
                        onChange={props.onMinValueInputChange}
                    />
                </div>
            </div>
            <div className={settingsStyles.button_window}>
                <Button
                    callback={props.onSetButtonClick}
                    disabled={props.inputMaxValue === props.inputMinValue || props.inputMaxValueError || props.inputMinValueError}
                    title={"set"}
                />
            </div>
        </div>
    )
}