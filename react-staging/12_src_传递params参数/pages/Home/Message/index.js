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
                {messages.map((messageObj)=>{
                    return <li key={messageObj.id}><Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;</li>
                })}
            </ul>
            <hr/>
            <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        </div>
    }
}

export default Message;