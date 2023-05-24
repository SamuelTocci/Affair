// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Vision from "./components/Vision";
import Scenography from "./components/Scenography";
import SaferSpaces from "./components/SaferSpaces";
import Team from "./components/Team";

function App() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/vision' element={<Vision/>} />
                        <Route path='/scenography' element={<Scenography/>} />
                        <Route path='/saferspaces' element={<SaferSpaces/>} />
                        <Route path='/team' element={<Team/>} />
                    </Routes>
                </div>
            </Router>
        );
}

export default App;
