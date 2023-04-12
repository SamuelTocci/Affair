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
    const [isDragging, setIsDragging] = useState(false);

    const eventControl = (event: { type: any; }, info: any) => {


        if (event.type === 'mousemove' || event.type === 'touchmove') {
            setIsDragging(true)
        }

        if (event.type === 'mouseup' || event.type === 'touchend') {
            setTimeout(() => {
                setIsDragging(false);
            }, 100);

        }
    }
    return (
        <div className="Header">
            <header>
                <a href={"/"}>
                    <img src={logospelled} className="logo-spelled"/>
                </a>
                <a href={"/architecture"} className="link" >
                    <Draggable defaultPosition={{x: -250, y:0}} onDrag={eventControl}
                               onStop={eventControl}>
                        <img src={architecture_hover} className="papiertje"/>
                    </Draggable>
                </a>
                <a href={"/vision"} className="link" >
                    <Draggable defaultPosition={{x: -150, y:35}} onDrag={eventControl}
                               onStop={eventControl}>
                        <img src={vision_hover} className="papiertje"/>
                    </Draggable>
                </a>
                <a href={"/saferspaces"} className="link" >
                    <Draggable defaultPosition={{x: -244, y:30}} onDrag={eventControl}
                               onStop={eventControl}>
                        <img src={safer_hover} className="papiertje"/>
                    </Draggable>
                </a>
                <a href={"/team"} className="link" >
                    <Draggable defaultPosition={{x: -138, y:-16}} onDrag={eventControl}
                               onStop={eventControl}>
                        <img src={team_hover} className="papiertje"/>
                    </Draggable>
                </a>
            </header>
        </div>
    );
}



export default Navbar;