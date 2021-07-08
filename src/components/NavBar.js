import react from 'react';
import SideMenuStyle from './NavBar.css'

function NavBar(){
    return(
        <>
        <div className="sidenav">
            <a href={"/"}>
                <img src='../media/logo_affair(temp).svg' alt="logo" width={4000}/>
            </a>
            <a href="./about">About</a>
            <a href="./tickets">Tickets</a>
            <a href="./contact">Contact</a>
        </div>
        </>
    );
}

export default NavBar;