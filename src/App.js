import logo from './media/logo_affair(temp).svg';
import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className={App}>
        <NavBar/>
        <Main/>
    </div>
  );
}

export default App;
