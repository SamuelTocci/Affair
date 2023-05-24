import logospelled from '../media/affair logo zw.png'
import logo from "../logo-small.svg"
import vision_hover from '../media/TitlePapiertjes/Vision kleur.png'
import safer_hover from '../media/TitlePapiertjes/Safer Spaces kleur.png'
import architecture_hover from '../media/TitlePapiertjes/architecture-papier.png'
import team_hover from '../media/TitlePapiertjes/Team kleur.png'
import Draggable from "react-draggable";

import './Navbar.css';
import {useState} from "react";

function Navbar() {
    let archiPos = {x: -124, y:-43};
    let visionPos = {x: -432, y:-52};
    let saferPos = {x: -609, y:0};
    let teamPos = {x: -648, y:2}
    const eventControl = (event: { type: any; }, info: any, co: any) => {

        if (event.type === 'mousemove' || event.type === 'touchmove') {

        }
        if (event.type === 'mouseup' || event.type === 'touchend') {
            //window.location.href = info;
            console.log(archiPos)
            if(info == "/scenography"){
                archiPos = {x: -300, y: -60};
            }
            if(info == "/vision"){
                visionPos = co;
            }
            if(info == "/saferspaces"){
                saferPos = co;
            }
            if(info == "/team"){
                teamPos = co;
            }

        }
    }

    return (
        <div className="Header">
            <header>
                <a href={"/"}>
                    <img src={logospelled} className="logo-spelled"/>
                </a>
                <Draggable defaultPosition={archiPos} onDrag={eventControl}
                           onStop={(event) => eventControl(event, "/scenography", {x: event.clientX, y: event.clientY})}>
                    <img src={architecture_hover} className="papiertje"/>
                </Draggable>
                <Draggable defaultPosition={visionPos} onDrag={eventControl}
                           onStop={(event) => eventControl(event, "/vision", {x: event.clientX, y: event.clientY})}>
                    <img src={vision_hover} className="papiertje"/>
                </Draggable>
                <Draggable defaultPosition={saferPos} onDrag={eventControl}
                           onStop={(event) => eventControl(event, "/saferspaces", {x: event.clientX, y: event.clientY})}>
                    <img src={safer_hover} className="papiertje"/>
                </Draggable>

                <Draggable defaultPosition={teamPos} onDrag={eventControl}
                           onStop={(event) => eventControl(event, "/team", {x: event.clientX, y: event.clientY})}>
                    <img src={team_hover} className="papiertje"/>
                </Draggable>
            </header>
        </div>
    );
}



export default Navbar;