import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.go(1)
    }
    go=()=>{
        this.props.history.go(-2)
    }
    render() {
        return (
            <div className="page-header">
                <h1>React Router Demo</h1>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default withRouter(Header);