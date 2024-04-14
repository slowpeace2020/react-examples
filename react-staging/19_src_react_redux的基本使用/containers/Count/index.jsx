//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect用于连接UI组件与redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// const CountContainer = connect()(CountUI)
//
// export default CountContainer

//mapStateToProps函数的返回值作为状态传递给UI组件,  key-value对象作为UI组件props的属性值----状态
function mapStateToProps(state) {
    console.log("container state: ",state)
    return {count: state}
}

//mapDispatchToProps函数的返回值作为状态传递给UI组件， key-value对象作为UI组件props的属性值---操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        increment:(data)=>{
            //通知redux执行方法
            dispatch(createIncrementAction(data))
        },
        decrement:(data)=>{
            //通知redux执行方法
            dispatch(createDecrementAction(data))
        },
        incrementAsync:(data,time)=>{
            //通知redux执行方法
            dispatch(createIncrementAsyncAction(data,time))
        },

    }
}

//用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)