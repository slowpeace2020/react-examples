import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

    //全选this.checkAll的回调
    handleCheckAll = (event) => {
        this.props.checkAll(event.target.checked);
    }
    //清除已完成任务的回调
    handleClearAllDone = () => {
        console.log('handleClearAllDone')
        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props
        //已完成个数,reduce统计
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                    <input type="checkbox" onChange={this.handleCheckAll}
                           checked={doneCount == total && total !== 0 ? true : false}/>
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;