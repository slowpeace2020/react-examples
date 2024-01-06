//创建外壳组件App
import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css"


//创建并暴露App组件
export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: false},
            {id: '003', name: '打代码', done: false},
        ]
    }
    //addToDo用于添加新任务，接收对象为ToDo对象
    addToDo = (todoObj) => {
        console.log("App", todoObj)
        //获取原todos
        const {todos} = this.state
        //追加todo
        const newToDos = [todoObj, ...todos]
        //更新状态
        this.setState({todos: newToDos})
    }

    //更改todo对象的状态
    updateToDo = (id, done) => {
        console.log('更改todo对象的状态', id, done)
        //获取原todos
        const {todos} = this.state
        //匹配处理数据
        const newToDos = todos.map((todoObj) => {
            // debugger;
            console.log(todoObj.id, id, todoObj.id === id)
            if (todoObj.id === id) {
                return {...todoObj, done}
            } else {
                return todoObj
            }
        })
        //更新状态
        this.setState({todos: newToDos})
    }

    //删除todo对象
    deleteToDo = (id) => {
        //获取原todos
        const {todos} = this.state
        //删除指定id的ToDo对象
        const newToDos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        //更新状态
        this.setState({todos: newToDos})
    }

    //全选
    checkAll = (done) => {
        //获取原todos
        const {todos} = this.state
        //加工数据
        const newToDos = todos.map((todoObj) => {
            return {...todoObj, done: done}
        })
        //更新状态
        this.setState({todos: newToDos})
    }

    //清除已完成
    clearAllDone = () => {
        console.log('App','clearAllDone')
        //获取原todos
        const {todos} = this.state
        //删除指定id的ToDo对象
        const newToDos = todos.filter((todoObj) => {
            return todoObj.done === false
        })
        //更新状态
        this.setState({todos: newToDos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo={this.addToDo}/>
                    <List todos={todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
//默认暴露,暴露App组件
// export default App