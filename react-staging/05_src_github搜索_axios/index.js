//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom/client';
//引入App组件，.js可省略
import App from './App';
// import reportWebVitals from './reportWebVitals';

//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
