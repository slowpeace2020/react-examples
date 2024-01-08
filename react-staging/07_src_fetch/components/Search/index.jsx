import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js';

export default class Search extends Component {
    search = async () => {
        //获取用户输入
        //发送网络请求
        //解构赋值连续写法,取出KeywordElement.value并且重命名为keyword
        const {KeywordElement: {value: keyword}} = this
        //发送请求前通知App更新状态
        // this.props.updateAppState({isFirst: false, isLoading: true})
        PubSub.publish('search', {isFirst: false, isLoading: true})

        console.log('关键词', keyword)
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {
        //         console.log("成功了")
        //         //请求成功后通知App更新状态
        //         // this.props.updateAppState({isLoading: false, users: response.data.items})
        //         PubSub.publish('search',{isLoading: false, users: response.data.items})
        //
        //     },
        //     error => {
        //         console.log("失败了", error)
        //         //请求失败后通知App更新状态
        //         // this.props.updateAppState({isLoading: false, err: error})
        //         PubSub.publish('search',{isLoading: false, err: error})
        //
        //     },
        // )

        //发送网络请求---使用fetch发送 未优化
        // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response =>{
        //         console.log("联系服务器成功了")
        //         return response.json()
        //     },
        //     // error =>{
        //     //     console.log("联系服务器失败了")
        //     //     //中断promise链
        //     //     return new Promise(()=>{})
        //     // }
        // ).then(
        //     response =>{
        //         console.log("获取数据成功了")
        //     },
        //     // error =>{
        //     //     console.log("获取数据失败了")
        //     // },
        // ).catch(//处理异常
        //     (error)=>{
        //         console.log("失败了",error)
        //     }
        // )

        //发送网络请求---使用fetch发送 优化
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await response.json()
            console.log(data)
            PubSub.publish('search', {isLoading: false, users: data.items})

        } catch (error) {
            console.log('请求出错')
            PubSub.publish('search', {isLoading: false, err: error})
        }
    }


    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
                    <input ref={c => this.KeywordElement = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }

}