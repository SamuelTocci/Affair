import logospelled from '../media/affair_spelled_2023.svg'
import logo from "../logo-small.svg"
import vision_hover from '../media/Vision-hover.svg'
import safer_hover from '../media/SaferSpaces-hover.svg'
import architecture_hover from '../media/Architecture-hover.svg'
import team_hover from '../media/Team-hover.svg'

import './Navbar.css';

function Navbar() {
    return (
        <div className="Header">
            <header className="Navbar-header">
                <a href={"/"}>
                    <img src={logospelled} className="logo-spelled"/>
                </a>
            </header>
            <div className={"link_container"}>
                <a href={"/"}>
                    <img src={logo} className="logo"/>
                </a>
                <div className={"Link-spacer"}>
                    <a href={"/vision"} className={"link"}>
                        <div className={"link-text"}> Vision </div>
                        <img src={vision_hover} className={"hover-icon"}/>
                    </a>
                </div>
                <div className={"Link-spacer"}>
                    <a href={"/saferspaces"} className={"link"}>
                        <div className={"link-text"}> Safer Spaces </div>
                        <img src={safer_hover} className={"hover-icon"}/>
                    </a>
                </div>
                <div className={"Link-spacer"}>
                    <a href={"/architecture"} className={"link"}>
                        <div className={"link-text"}> Architecture </div>
                        <img src={architecture_hover} className={"hover-icon"}/>
                    </a>
                </div>
                <div className={"Link-spacer"}>
                    <a href={"/team"} className={"link"}>
                        <div className={"link-text"}> Team </div>
                        <img src={team_hover} className={"hover-icon"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;