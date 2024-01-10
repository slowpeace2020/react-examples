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
    render() {
        const {messages} = this.state
        return <div>
            <ul>
                {/*向路由组件传递params参数*/}
                {/*{messages.map((messageObj)=>{*/}
                {/*    return <li key={messageObj.id}><Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;</li>*/}
                {/*})}*/}
                {/*向路由组件传递search参数*/}
                {/*{messages.map((messageObj)=>{*/}
                {/*    return <li key={messageObj.id}><Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;</li>*/}
                {/*})}*/}

                {/*向路由组件传递state参数*/}

                {messages.map((messageObj)=>{
                    return <li key={messageObj.id}><Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp;</li>
                })}
            </ul>
            <hr/>
            {/*声明接收params参数*/}
            {/*<Route path="/home/message/detail/:id/:title" component={Detail}></Route>*/}

            {/*声明接收search参数，正常声明即可*/}
            {/*<Route path="/home/message/detail" component={Detail}></Route>*/}

            {/*声明接收state参数，正常声明即可*/}
            <Route path="/home/message/detail" component={Detail}></Route>
        </div>
    }
}

export default Message;