import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";
import  './index.css'

class Header extends Component {

    //对接收的props进行类型和必要性限制
    static propTypes={
        addToDo:PropTypes.func.isRequired,
    }

    handleKeyUp=(event)=>{
        //解构赋值获取
        const {keyCode,target} = event
        //判断是否为回车按键
        if(keyCode!=13){
            return
        }
        //添加todo名字不能为空
        if(target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        //准备好一个ToDo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        console.log(todoObj)
        this.props.addToDo(todoObj)
        //清空输入框
        target.value=''
    }


    render() {
        return (
            <div className ="todo-header">
                <input onKeyUp={this.handleKeyUp}  type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }

}

export default Header;