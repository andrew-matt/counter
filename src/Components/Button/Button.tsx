import React from 'react';

type ButtonPropsType = {
    title: string
    callback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
            <button onClick={props.callback}>{props.title}</button>
    );
};
