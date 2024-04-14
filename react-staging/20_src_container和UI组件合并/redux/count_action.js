/**
 * 该文件为Count组件生成action对象
 **/
import {INCREMENT,DECREMENT} from './constant';
// import store from "./store";
//同步action, ation的值为Object
export const createIncrementAction = (data) => ({type: INCREMENT, data})
export const createDecrementAction = (data) => ({type: DECREMENT, data})
//异步action, ation的值为函数，异步action都会调用同步action
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}


