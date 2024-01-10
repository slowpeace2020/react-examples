import React, {Component} from "react";
import {Route} from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";
import Header from "./components/Header";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="navbar">
                    {/* React Router links to switch components */}
                    <MyNavLink to="/home">Home</MyNavLink>
                    <MyNavLink to="/about">About</MyNavLink>
                </div>
                <div>
                    {/* Route registration */}

                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    {/* Redirect to /home if the path is exactly / */}


                </div>
            </div>
        );
    }
}
