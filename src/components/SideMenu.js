import react from 'react';
import SideMenuStyle from './SideMenu.css'

function SideMenu(){
    return(
        <div className="sidenav">
            <a href="#">About</a>
            <a href="#">Tickets</a>
            <a href="#">Contact</a>
        </div>

    );
}

export default SideMenu;