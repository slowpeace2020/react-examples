//创建外壳组件App
import React,{Component} from "react";
import './App.css'
import Search from "./components/Search";
import List from "./components/List";

//创建并暴露App组件
export default class App extends Component{

    render() {
        return (
            <div className="search-container">
                <h1>GitHub User Search</h1>
                <Search/>
                <List/>
            </div>
        )
    }
}

//默认暴露,暴露App组件
// export default App