// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Vision from "./components/Vision";

function App() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/vision' element={<Vision/>} />
                    </Routes>
                </div>
            </Router>
        );
}

export default App;
