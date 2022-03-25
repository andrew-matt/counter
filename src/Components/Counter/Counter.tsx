import React from 'react';
import {Button} from "../Button/Button";

type CounterPropsType = {

}

export const Counter = (props: CounterPropsType) => {
    return (
        <div>
            0
            <Button title={"Set"} callback={() => {}}/>
            <Button title={"Reset"} callback={() => {}}/>
        </div>
    );
};
