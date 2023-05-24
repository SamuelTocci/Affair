import React from "react";
import './Footer.css'

import VedettLogo from "../media/VedettLogo.svg"
import MijnLeuvenLogo from "../media/MijnLeuven.svg"
import Image2 from "../media/Images/HabitatConstruct.JPG"




function Footer() {
    const footText = "Our dear partners <3"

    return (
        <div className={"horizontal"}>
            <h1 className={"partnertext"}> {footText}</h1>
            <img className={"vedettlogo"} src={VedettLogo}/>
            <img className={"mijnleuvenlogo"} src={MijnLeuvenLogo}/>
        </div>
    );
}

export default Footer