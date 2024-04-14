//引入Count的UI组件
// import CountUI from '../../components/Count'
//引入connect用于连接UI组件与redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";
import React, {Component} from "react";

// const CountContainer = connect()(CountUI)
//
// export default CountContainer

//mapStateToProps函数的返回值作为状态传递给UI组件,  key-value对象作为UI组件props的属性值----状态
// function mapStateToProps(state) {
//     console.log("container state: ",state)
//     return {count: state}
// }

const mapStateToProps = state=>({count:state})

//mapDispatchToProps函数的返回值作为状态传递给UI组件， key-value对象作为UI组件props的属性值---操作状态的方法
// function mapDispatchToProps(dispatch) {
//     return {
//         increment:(data)=>{
//             //通知redux执行方法
//             dispatch(createIncrementAction(data))
//         },
//         decrement:(data)=>{
//             //通知redux执行方法
//             dispatch(createDecrementAction(data))
//         },
//         incrementAsync:(data,time)=>{
//             //通知redux执行方法
//             dispatch(createIncrementAsyncAction(data,time))
//         },
//
//     }
// }

const mapDispatchToProps = dispatch=>( {
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

})

//用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// export default connect(
//     state=>({count:state}),
//     dispatch=>( {
//         increment:(data)=>{
//             //通知redux执行方法
//             dispatch(createIncrementAction(data))
//         },
//         decrement:(data)=>{
//             //通知redux执行方法
//             dispatch(createDecrementAction(data))
//         },
//         incrementAsync:(data,time)=>{
//             //通知redux执行方法
//             dispatch(createIncrementAsyncAction(data,time))
//         },
//
//     }))(CountUI)

//定义UI组件
class Count extends Component {

    state={carName:'fort'}

    increment=()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    decrement=()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)


    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        if(this.props.count%2==1){
            this.props.increment(value*1)
        }
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)

    }



    render() {
        // console.log('CountUI接收的props: ',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}


//用connect()()创建并暴露一个Count的容器组件
export default connect(
    state=>({count:state}),
    ( {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction,
    }))(Count)