import React from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from './Settings.module.css'

export const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div className={s.maxValue}>
                    max value:<Input/>
                </div>
                <div className={s.startValue}>
                    start value:<Input/>
                </div>
            </div>
            <div className={s.setButton}>
                <Button title={"Set"} callback={() => {}}/>
            </div>
        </div>
    );
};
