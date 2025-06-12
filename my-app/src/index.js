import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from './Greeting';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(<Greeting name="Alice" />);

// ReactDOM.render
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
