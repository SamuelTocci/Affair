import './Blog-item.css';
import React from "react";

export function Blogitemright(props) {
    return (
        <div className={"container-right"}>
            <img className={"image"} src={props.image}/>
            <div className={"text-container"}>
                <h1 className={"title"}> {props.title}</h1>
                <p className={"text"}> {props.text}</p>
            </div>
        </div>
    );
}

export function Blogitemleft(props) {
    return (
        <div className={"container-left"}>
            <img className={"image"} src={props.image}/>
            <div className={"text-container"}>
                <h1 className={"title"}> {props.title}</h1>
                <p className={"text"}> {props.text}</p>
            </div>
        </div>
    );
}

