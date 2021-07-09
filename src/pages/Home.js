import react from 'react'
import {Route, Switch} from "react-router-dom";
import About from "./About";
import BigText from "../components/BigText";
import PictureText from "../components/PictureText";
import HomeStyle from "./Home.css"
import musicPicture from "../res/clubPicture1.PNG"

const Home = () => {
    return (
    <body>
    <div className={"wrapper"}>
        <BigText/>
        <PictureText  category={"Music"} title={"Internationale, nationale en lokale artiesten samen op één line-up"} text={"Op vlak van muziek, staan we voor kwaliteitsvolle elektronische muziek. We zien internationale,\n" +
        "nationale en lokale artiesten samen op een line-up staan, om zo lokaal te talent te steunen, maar\n" +
        "ook de kwaliteit van ons evenement te garanderen. Binnen de alternatieve elektronische muziek\n" +
        "scene focussen we vooral op house, techno en alles ertussen."} img={musicPicture}/>
        <PictureText  category={"Music"} title={"Internationale, nationale en lokale artiesten samen op één line-up"} text={"Op vlak van muziek, staan we voor kwaliteitsvolle elektronische muziek. We zien internationale,\n" +
        "nationale en lokale artiesten samen op een line-up staan, om zo lokaal te talent te steunen, maar\n" +
        "ook de kwaliteit van ons evenement te garanderen. Binnen de alternatieve elektronische muziek\n" +
        "scene focussen we vooral op house, techno en alles ertussen."} img={musicPicture}/>
        <div className={"push"}></div>
    </div>
    </body>
    );
}

export default Home;