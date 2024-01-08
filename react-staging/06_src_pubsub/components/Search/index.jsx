import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js';

class Search extends Component {
    search = () => {
        //获取用户输入
        //发送网络请求
        //解构赋值连续写法,取出KeywordElement.value并且重命名为keyword
        const {KeywordElement: {value: keyword}} = this
        //发送请求前通知App更新状态
        // this.props.updateAppState({isFirst: false, isLoading: true})
        PubSub.publish('search',{isFirst: false, isLoading: true})

        console.log('关键词', keyword)
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                console.log("成功了")
                //请求成功后通知App更新状态
                // this.props.updateAppState({isLoading: false, users: response.data.items})
                PubSub.publish('search',{isLoading: false, users: response.data.items})

            },
            error => {
                console.log("失败了", error)
                //请求失败后通知App更新状态
                // this.props.updateAppState({isLoading: false, err: error})
                PubSub.publish('search',{isLoading: false, err: error})

            },
        )

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

export default Search;