type ActionType = ReturnType<typeof incValue>
    | ReturnType<typeof resetValue>
    | ReturnType<typeof setMaxValueError>
    | ReturnType<typeof setStartValueError>
    | ReturnType<typeof changeSettings>
    | ReturnType<typeof setValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setStartValue>

export const initialState = {
    settingsChanged: false,
    maxValueError: false,
    startValueError: false,
    maxValue: 5,
    startValue: 0,
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state,
                value: state.value + 1
            }
        case "RESET-VALUE":
            return {
                ...state,
                value: state.startValue
            }
        case "SET-MAX-VALUE-ERROR":
            return {
                ...state,
                maxValueError: action.maxValueError
            }
        case "SET-START-VALUE-ERROR":
            return {
                ...state,
                startValueError: action.startValueError
            }
        case "SETTINGS-CHANGE":
            return {
                ...state,
                settingsChanged: action.settingsChanged
            }
        case "SET-VALUE":
            return {
                ...state,
                value: action.value
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "SET-START-VALUE":
            return {
                ...state,
                startValue: action.startValue
            }
        default:
            return state
    }
}

export const incValue = () => ({type: 'INC-VALUE'} as const)
export const resetValue = () => ({type: 'RESET-VALUE'} as const)
export const setMaxValueError = (maxValueError: boolean) => ({type: 'SET-MAX-VALUE-ERROR', maxValueError} as const)
export const setStartValueError = (startValueError: boolean) => ({type: 'SET-START-VALUE-ERROR', startValueError} as const)
export const changeSettings = (settingsChanged: boolean) => ({type: 'SETTINGS-CHANGE', settingsChanged} as const)
export const setValue = (value: number) => ({type: 'SET-VALUE', value} as const)
export const setMaxValue = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const setStartValue = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
