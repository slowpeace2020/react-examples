//创建外壳组件App
import React,{Component} from "react";
import './App.css'
import Search from "./components/Search";
import List from "./components/List";

//创建并暴露App组件
export default class App extends Component{
    state = {//初始化状态，
        users:[],//users初始值为数组
        isFirst:true,//是否第一次打开页面
        isLoading:false,//是否处于加载中
        err:'',//存储请求相关的错误信息

    }
    //更新App的状态对象
    updateAppState =(stateObj)=>{
        console.log(stateObj)
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="search-container">
                <h1>GitHub User Search</h1>
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}

//默认暴露,暴露App组件
// export default App