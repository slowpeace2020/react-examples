import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        const {to,title} = this.props
        return (
            <NavLink to={to} className={({ isActive }) => isActive ? 'list-group-item demostyle' : 'list-group-item'} {...this.props}/>
        );
    }
}

export default MyNavLink;