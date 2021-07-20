import react from 'react'
import {Route, Switch} from "react-router-dom";
import BigText from "../components/BigText";
import PictureText from "../components/PictureText";
import "./Home.css"
import musicPicture from "../res/clubPicture1.PNG"
import fingerprints from "../res/fingerprints.svg"
import AffairTypo from "../res/logoTypo.svg"

const Home = () => {
    return (
    <body>
    <div className={"main"}>
        <img src={AffairTypo} className={"logo"}/>
        
    </div>
    </body>
    );
}

export default Home;