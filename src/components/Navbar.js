import logospelled from '../media/affair logo zw.png'
import logo from "../logo-small.svg"
import vision_hover from '../media/TitlePapiertjes/Vision kleur.png'
import safer_hover from '../media/TitlePapiertjes/Safer Spaces kleur.png'
import architecture_hover from '../media/TitlePapiertjes/architecture-papier.png'
import team_hover from '../media/TitlePapiertjes/Team kleur.png'
import Draggable from "react-draggable";

import './Navbar.css';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Navbar() {
    let archiPos = {x: -226, y: 1};
    let visionPos = {x: -102, y: 6};
    let saferPos =  {x: -203, y: 29};
    let teamPos =  {x: -93, y: 31};
    const eventControl = (event: { type: any; }, info: any, nav: any) => {

        if (event.type === 'mousemove' || event.type === 'touchmove') {

        }
        if (event.type === 'mouseup' || event.type === 'touchend') {
            // window.location.href = info;

        }
    }

    const navigate = useNavigate();

    return (
        <div className="Header">
            <header>
                <a href={"/"}>
                    <img src={logospelled} className="logo-spelled"/>
                </a>
                <Draggable defaultPosition={archiPos}  onStop={(event) => eventControl(event, "/scenography", navigate("/scenography"))}>
                    <img src={architecture_hover} className="papiertje"/>
                </Draggable>
                <Draggable defaultPosition={visionPos}   onStop={(event) => eventControl(event, "/vision", navigate("/vision"))}>
                    <img src={vision_hover} className="papiertje"/>
                </Draggable>
                <Draggable defaultPosition={saferPos} onStop={(event) => eventControl(event, "/saferspaces", navigate("/saferspaces"))}>
                    <img src={safer_hover} className="papiertje"/>
                </Draggable>

                <Draggable defaultPosition={teamPos}  onStop={(event) => eventControl(event, "/team", navigate("/team"))}>
                    <img src={team_hover} className="papiertje"/>
                </Draggable>
            </header>
        </div>
    );
}



export default Navbar;