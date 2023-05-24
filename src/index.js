import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom'
import './components/Team.css'

import ImageLekke from "./media/Images/lekke.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Navbar/>
      <App/>
      <img className={"image-header"} src={ImageLekke}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
