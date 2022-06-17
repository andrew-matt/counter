import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

// @ts-ignore
window.state = store.getState()
