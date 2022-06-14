// import style from "../settings/settings.module.css";
// import React, {ChangeEvent, useCallback, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {AppStateType} from "../../bll/store";
// import {changeSettings, setError, setMaxValue, setStartValue, setValue} from "../../bll/counter-reducer";
// import {Button} from "../button/Button";
// import {Input} from "../input/Input";
// import {Counter2} from "../counter2/Counter2";
//
// export const Settings2 = () => {
//
//     const [counter, setCounter] = useState(false)
//
//     const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
//     const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
//     const error = useSelector<AppStateType, boolean>(state => state.counter.error)
//
//     const dispatch = useDispatch()
//
//     const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const maxValue = +e.currentTarget.value
//         if (maxValue < 1 || maxValue <= startValue) {
//             dispatch(changeSettings(false))
//             dispatch(setError(true))
//         } else if (maxValue >= 1 && maxValue > startValue && startValue >= 0) {
//             dispatch(setError(false))
//             dispatch(changeSettings(true))
//         }
//         dispatch(setMaxValue(+e.currentTarget.value))
//     }
//
//     const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const startValue = +e.currentTarget.value
//         if (startValue < 0 || startValue >= maxValue) {
//             dispatch(changeSettings(false))
//             dispatch(setError(true))
//         } else if (startValue >= 0 && startValue < maxValue) {
//             dispatch(setError(false))
//             dispatch(changeSettings(true))
//         }
//         dispatch(setStartValue(+e.currentTarget.value))
//         dispatch(setValue(+e.currentTarget.value))
//     }
//
//     const onSetButtonClickHandler = useCallback(() => {
//         dispatch(changeSettings(false))
//         setCounter(true)
//     }, [dispatch])
//
//     return (
//         counter
//         ? <Counter2/>
//         : <div className={style.settingsContainer} style={{marginRight: 0}}>
//             <div className={style.inputsContainer}>
//                 <div className={style.inputContainer}>
//                     max value:
//                     <Input
//                         value={maxValue}
//                         onChange={setMaxValueHandler}
//                     />
//                 </div>
//                 <div className={style.inputContainer}>
//                     start value:
//                     <Input
//                         value={startValue}
//                         onChange={setStartValueHandler}
//                     />
//                 </div>
//             </div>
//             <div className={style.buttonContainer}>
//                 <Button
//                     callback={onSetButtonClickHandler}
//                     disabled={error}
//                     title={"set"}
//                 />
//             </div>
//         </div>
//     )
// }
export default 1