import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import SideMenuStyle from './NavBar.css'
import logo from '../res/logo_affair(temp).svg';

class NavBar extends React.Component{
    render(){
        return(
            <>
            <div className="sidenav">
                <div className={"logo-wrapper"}>
                    <a href={"/"}>
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <a href="./tickets">Tickets</a>
                <a href="./about">About</a>
                <a href="./contact">Contact</a>
            </div>
            </>
        );
    }
}

export default NavBar;