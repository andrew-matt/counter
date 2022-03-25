import React from 'react';
import {Input} from "../Input/Input";
import s from './Settings.module.css'
import {Button} from "../Button/Button";

export const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div className={s.maxValue}>
                    max value:
                    <Input callback={() => {}}/>
                </div>
                <div className={s.minValue}>
                    min value:
                    <Input callback={() => {}}/>
                </div>
            </div>
            <div className={s.setButton}>
                <Button title={"Set"} callback={() => {}} disabled={false}/>
            </div>
        </div>
    );
};

