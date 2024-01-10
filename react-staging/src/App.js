//创建外壳组件App
import React,{Component} from "react";
import {Button} from "antd";
import 'antd/dist/antd.css'

//创建并暴露App组件
export default class App extends Component{
    render() {
        return (
            <div>
                App...
                <button>点我</button>
                <Button type="primary">Primary Button</Button>
                <Button>Primary Button</Button>
                <Button type="link">Primary Button</Button>
            </div>
        )
    }
}

//默认暴露,暴露App组件
// export default App