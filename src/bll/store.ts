import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let preloadedState;
const persistedString = localStorage.getItem('app-state')
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('max-value', JSON.stringify(store.getState().counter.maxValue))
    localStorage.setItem('start-value', JSON.stringify(store.getState().counter.startValue))
})