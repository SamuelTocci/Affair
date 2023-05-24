import React from "react";
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Image1 from "../media/Images/_DSF1226.jpeg"
import Image2 from "../media/Images/Laure R-5444-54440019.jpg"
import SaferSpaces from "./SaferSpaces";
import Vision from "./Vision";
import Scenography from "./Scenography";
import Team from "./Team";


function Home() {
        return (
            <div className={"right-align"}>
                <Blogitemright image={Image1}  title={"Creating Unique Dancefloors"} text={"Affair consists of an enthusiastic group of young people with a healthy appetite for entrepreneurship. Behind this enthusiasm is a strong team with diverse skills and experiences. With a combination of wild dreams and the commitment of our team, we want to contribute something to the party and club culture of Leuven. This in the form of a quality party venue where electronic music , scenography and progressive dance floors find each other.\n" +
                    "By looking for unused space in and around Leuven and transforming it into temporary dance floors, Affair wants to contribute in a sustainable way to the expansion and diversification of events in Leuven. We think this is the ideal opportunity to learn and at the same time give something back to the city and its young people."} ></Blogitemright>
                <Blogitemleft image={Image2}  title={"Experimental spaces"} text={"Our collective wants to answer a gap in Leuven's nightlife and event culture that still lacks diversity and opportunities in terms of nightlife. It feels like the ideal opportunity for us to take our first real steps into the event world and translate our wide creative output into our project. This way, we can be part of the DNA of the city's nightlife. We are building an organisation where creativity and entrepreneurship go hand in hand. Our project would continue under the form of Openair events in which we combine quality electronic music with architecture. In this way, we create a stimulating environment and unique atmosphere, where you have the space to discover music. Responding to the desire of simply having a good night of partying. This with an extra emphasis on sustainability, which we continue in full force: in terms of materials for constructions, low-energy lighting, vegetarian meals, waste reduction, etc."}></Blogitemleft>
                <div className={'mobilehide'}>
                    <SaferSpaces/>
                    <Vision/>
                    <Scenography/>
                    <Team/>
                </div>
            </div>

        );
}

export default Home