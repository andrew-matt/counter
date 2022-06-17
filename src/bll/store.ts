import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

let preloadedState = {
    counter: {
        settingsChanged: false,
        maxValueError: false,
        startValueError: false,
        maxValue: 5,
        startValue: 0,
        value: 0
    }
};
const maxValueString = localStorage.getItem('max-value')
const startValueString = localStorage.getItem('start-value')

if (maxValueString) {
    preloadedState.counter.maxValue = JSON.parse(maxValueString)
}

if (startValueString) {
    preloadedState.counter.startValue = JSON.parse(startValueString)
    preloadedState.counter.value = JSON.parse(startValueString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    // localStorage.setItem('app-state', JSON.stringify(store.getState().counter))
    // localStorage.setItem('max-value', JSON.stringify(store.getState().counter.maxValue))
    // localStorage.setItem('start-value', JSON.stringify(store.getState().counter.startValue))
})

// @ts-ignore
window.state = store.getState()
// @ts-ignore
window.preloadedState = preloadedState