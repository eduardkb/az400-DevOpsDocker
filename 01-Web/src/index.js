import React from 'react';
import ReactDOM from 'react-dom/client';
// without Express serving frontend page
// import { BrowserRouter } from 'react-router-dom';
// with express serving fe
import { HashRouter } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
