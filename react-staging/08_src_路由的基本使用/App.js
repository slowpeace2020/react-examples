import React, { Component } from "react";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

export default class App extends Component {
    render() {
        return (
                <div>
                    <div className="content">
                        <h1>React Router Demo</h1>
                    </div>
                    <div>
                        <div className="navbar">
                            {/* React Router links to switch components */}
                            <Link to="/about">About</Link><br/>
                            <Link to="/home">Home</Link>
                        </div>
                        <div>
                            {/* Route registration */}
                            <Routes>
                                <Route path="/about" element={<About />} />
                                <Route path="/home" element={<Home />} />
                                {/* Redirect to /home if the path is exactly / */}
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </div>
        );
    }
}
