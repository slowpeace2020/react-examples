import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <h1>React Router Demo</h1>
                </div>
                <div className="navbar">
                    {/* React Router links to switch components */}
                    <MyNavLink to="/test/home">Home</MyNavLink>
                    <MyNavLink to="/test/about">About</MyNavLink>
                </div>
                <div>
                    {/* Route registration */}

                    <Routes>
                        <Route path="/test/about" element={<About/>}/>
                        <Route path="/test/home" element={<Home/>}/>
                        {/* Redirect to /home if the path is exactly / */}
                    </Routes>


                </div>
            </div>
        );
    }
}
