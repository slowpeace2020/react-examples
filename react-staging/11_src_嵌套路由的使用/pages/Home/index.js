import React, {Component} from 'react';
import MyNavLink from "../../components/MyNavLink";
import {Route} from 'react-router-dom';
import News from "./News";
import Message from "./Message";

class Home extends Component {
    render() {
        return (
            <div className="panel-body">
                <div>
                    <h3>我是Home的内容</h3>
                    <div>
                        <ul className="nav nav-tabs">
                            <li><MyNavLink to="/home/news">News</MyNavLink></li>
                            <li><MyNavLink to="/home/message">Message</MyNavLink></li>
                        </ul>
                    {/*    注册路由*/}
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;