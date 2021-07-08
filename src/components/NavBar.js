import React, {useState} from 'react';
import SideMenuStyle from './NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <>
            <div className="sidenav">
                <div className={"Name"}> Affair </div>
                <a href={"/"}>
                    <img src='../res/logo_affair(temp).svg' alt="logo" width={4000}/>
                </a>
                <a href="./about">About</a>
                <a href="./tickets">Tickets</a>
                <a href="./contact">Contact</a>
            </div>
            </>
        );
    }
}

export default NavBar;