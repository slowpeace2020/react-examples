import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state = {
        messages:[
            {id:'01',title:'message001'},
            {id:'02',title:'message002'},
            {id:'03',title:'message003'},
        ]
    }
    replaceShow=(id,title)=>{
        //实现跳转到Detail组件，且为replace跳转,携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

    }

    pushShow=(id,title)=>{
        //实现跳转到Detail组件，且为replace跳转
        this.props.history.push(`/home/message/detail/${id}/${title}`)

    }

    render() {
        const {messages} = this.state
        return (<div>
            <ul>
                {/*向路由组件传递params参数*/}
                {messages.map((messageObj)=> {
                    return <li key={messageObj.id}><Link
                        to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                        &nbsp;<button onClick={()=>{this.pushShow(messageObj.id,messageObj.title)}}>push查看</button>
                        &nbsp;<button onClick={()=>{this.replaceShow(messageObj.id,messageObj.title)}}>replace查看</button>
                    </li>
                })}

                {/*})}*/}
                {/*向路由组件传递search参数*/}
                {/*{messages.map((messageObj)=>{*/}
                {/*    return <li key={messageObj.id}><Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;</li>*/}
                {/*})}*/}

                {/*向路由组件传递state参数*/}

                {/*// {messages.map((messageObj)=>{*/}
                {/*//     return <li key={messageObj.id}><Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp;</li>*/}
                {/*// })}*/}
            </ul>
            <hr/>
            {/*声明接收params参数*/}
            <Route path="/home/message/detail/:id/:title" component={Detail}></Route>

            {/*声明接收search参数，正常声明即可*/}
            {/*<Route path="/home/message/detail" component={Detail}></Route>*/}

            {/*声明接收state参数，正常声明即可*/}
            {/*<Route path="/home/message/detail" component={Detail}></Route>*/}
        </div>)
    }
}

export default Message;