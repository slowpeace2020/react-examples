//创建外壳组件App
import React,{Component} from "react";
import Index from "./components/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建并暴露App组件
export default class App extends Component{
    render() {
        return (
            <div>
                <Index/>
                <Welcome/>
            </div>
        )
    }
}

//默认暴露,暴露App组件
// export default App