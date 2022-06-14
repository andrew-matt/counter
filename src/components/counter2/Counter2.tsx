// import style from "../counter/counter.module.css";
// import React, {useCallback, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {AppStateType} from "../../bll/store";
// import {incValue, resetValue} from "../../bll/counter-reducer";
// import {Button} from "../button/Button";
// import {Settings2} from "../settings2/Settings2";
//
// export const Counter2 = () => {
//
//     const [settings, setSettings] = useState(false)
//
//     const value = useSelector<AppStateType, number>(state => state.counter.value)
//     const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
//     const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
//     const error = useSelector<AppStateType, boolean>(state => state.counter.error)
//     const settingsChanged = useSelector<AppStateType, boolean>(state => state.counter.settingsChanged)
//
//     const dispatch = useDispatch()
//
//     const valueContainerClass = `${style.valueContainer}
//      ${!settingsChanged && value === maxValue && style.valueContainerMaxValue}
//      ${settingsChanged && style.valueContainerChangeSettings}
//      ${error && style.valueContainerError}`
//
//     const incHandler = useCallback(() => {
//         dispatch(incValue())
//     }, [dispatch])
//
//     const resetHandler = useCallback(() => {
//         dispatch(resetValue())
//     }, [dispatch])
//
//     const onSetButtonClickHandler = () => {
//         setSettings(true)
//     }
//
//     return (
//
//             settings
//             ?  <Settings2/>
//             : <div className={style.counterContainer}>
//                 <div className={valueContainerClass}>
//                     {
//                         settingsChanged
//                             ? `enter values and press 'set'`
//                             : error
//                                 ? `Incorrect value!`
//                                 : value
//                     }
//                 </div>
//                 <div className={style.buttonsContainer}>
//                     <Button
//                         callback={incHandler}
//                         disabled={value === maxValue || error || settingsChanged}
//                         title={"inc"}
//                     />
//                     <Button
//                         callback={resetHandler}
//                         disabled={value === startValue || error || settingsChanged}
//                         title={"reset"}
//                     />
//                     <Button
//                         callback={onSetButtonClickHandler}
//                         title={"set"}
//                     />
//                 </div>
//             </div>
//
//     )
// }

export default 1