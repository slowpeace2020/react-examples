import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {
    //对接收的props进行类型和必要性限制
    static propTypes = {
        updateToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired,
    }

    state = {mouse: false} //标识鼠标移入移出

    //鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            console.log(flag)
            this.setState({mouse: flag})
        }
    }

    //勾选或者取消勾选某一个ToDo的回调
    handleCheck = (id)=>{
        // console.log('handleCheck',id)
        return (event)=>{
            this.props.updateToDo(id,event.target.checked)
        }
    }

    //删除一个todo的回调
    handleDelete=(id)=>{
       console.log("通知App删除",id)
        //弹窗确认
        if(window.confirm("确定删除吗？")){
            this.props.deleteToDo(id)
        }
    }



    render() {
        const {id,done, name} = this.props
        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;