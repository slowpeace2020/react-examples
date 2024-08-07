// src/App.js
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
  );
}

export default App;
