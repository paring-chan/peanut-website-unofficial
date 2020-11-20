import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.config = {
    api: 'http://test.pikodev.me:1234'
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

reportWebVitals();
