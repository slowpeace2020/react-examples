import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction} from "../../redux/count_action";

class Count extends Component {
    add = ()=>{
        this.props.add(1)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.sum}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default connect(
    //映射状态，
    state=>({sum:state}),
    //映射操作状态的方法
    {
    add:createIncrementAction
    }
)(Count)

