import React from "react";
import './Team.css'
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Imagehead from "../media/Images/ClubNachtSceno.jpg"
import Image1 from "../media/Images/LastSupper.jpg"
import Image2 from "../media/Images/HabitatConstruct.JPG"




function Team() {
    return (
        <div className={"right-align"}>
            <img className={"image-header"} src={Image1}/>
            <h1>Amélie Lorent - 21</h1>
            <p>Communication and copywriter</p>

            <h1>Bauke de Langhe - 25</h1>
            <p>Communication</p>

            <h1>Ferre Thomas - 22</h1>
            <p>Volunteer coordination and catering</p>

            <h1>Jan-Thomas Roefs - 21</h1>
            <p>Administration</p>

            <h1>Jasper Spinnewijn - 24</h1>
            <p>Event production</p>

            <h1>Kobe Degreef - 23</h1>
            <p>Scenography</p>

            <h1>Laure Robenek - 21</h1>
            <p>Safer Space</p>

            <h1>Leonard Deknopper - 21</h1>
            <p>Finance</p>

            <h1>Manou Van den Eynde - 23</h1>
            <p>Scenography</p>

            <h1>Martha Delagrange - 22</h1>
            <p>Scenography</p>

            <h1>Max Gaublomme - 21</h1>
            <p>Programming, strategy and event production</p>

            <h1>Samuel Tocci - 20</h1>
            <p>Project coordinator and event production</p>

        </div>
    );
}

export default Team