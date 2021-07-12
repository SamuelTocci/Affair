import react from 'react'
import {Route, Switch} from "react-router-dom";
import About from "./About";
import BigText from "../components/BigText";
import PictureText from "../components/PictureText";
import HomeStyle from "./Home.css"
import musicPicture from "../res/clubPicture1.PNG"
import fingerprints from "../res/fingerprints.svg"

const Home = () => {
    return (
    <body>
    <div className={"wrapper"}>
        <BigText/>
        <PictureText  category={"Over ons"} title={"Op een duurzame manier bijdragen aan de diversicatie van de events in leuven"} text={"Affair bestaat uit een enthousiaste groep jongeren met een gezonde goesting voor onder-\n" +
        "nemen. Achter dit enthousiasme staat een sterk team met diverse vaardigheden en ervaringen.\n" +
            "Door op zoek te gaan naar on-\n" +
        "benutte ruimte in en rond Leuven en die te transformeren in tijdelijke dansvloeren, wil Affair\n" +
        "\n" +
        "op een duurzame manier bijdragen aan de uitbreiding en diversificatie van de events in Leuven.\n"} img={fingerprints}/>
        <PictureText category={"Music"} title={"Internationale, nationale en lokale artiesten samen op één line-up"} text={"Op vlak van muziek, staan we voor kwaliteitsvolle elektronische muziek. We zien internationale,\n" +
        "nationale en lokale artiesten samen op een line-up staan, om zo lokaal te talent te steunen, maar\n" +
        "ook de kwaliteit van ons evenement te garanderen. Binnen de alternatieve elektronische muziek\n" +
        "scene focussen we vooral op house, techno en alles ertussen."} img={musicPicture}/>
        <div className={"push"}></div>
    </div>
    </body>
    );
}

export default Home;