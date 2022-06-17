import {initialState} from "../bll/counter-reducer";

const preloadedState = {
    counter: initialState
};

export const loadState = () => {
    const maxValueString = localStorage.getItem('max-value')
    const startValueString = localStorage.getItem('start-value')

    if (maxValueString) {
        initialState.maxValue = JSON.parse(maxValueString)
    }

    if (startValueString) {
        initialState.startValue = JSON.parse(startValueString)
        initialState.value = JSON.parse(startValueString)
    }
    return preloadedState
};
