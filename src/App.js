import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import {Switch, Route} from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
  return (
    <div className={App}>
        <Main/>
    </div>
  );
}

export default App;
