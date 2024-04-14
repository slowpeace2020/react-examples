/*
用于创建为Count组件服务Reducer,本质是一个函数
Reducer会接到两个参数，分别为之前的状态（preState）,动作对象（action）
*/

import {INCREMENT,DECREMENT} from './constant';

const initState = 10  //初始化状态
export default function countReducer(preState=initState,action) {
    console.log(preState,action)
    //从action对象中获取type,data
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }


}

