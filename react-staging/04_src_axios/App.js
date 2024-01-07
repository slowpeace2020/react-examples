//创建外壳组件App
import React, {Component} from "react";
import axios from "axios";

//创建并暴露App组件
export default class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:3000/api1/market/joblist').then(
            response => {
                console.log('成功了', response)
            },
            error => {
                console.log('失败', error)
            }
        )
    }

    getCompanyData = () => {
        axios.get('http://localhost:3000/index.html').then(
            response => {
                console.log('成功了', response.data)
            },
            error => {
                console.log('失败', error)
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取数据</button>
                <button onClick={this.getCompanyData}>点我获取公司数据</button>
            </div>
        )
    }


}

//默认暴露,暴露App组件
// export default App