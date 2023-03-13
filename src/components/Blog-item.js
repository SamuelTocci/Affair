import './Blog-item.css';
import React from "react";

export function Blogitemright(props) {
    return (
        <div className={"container-right"}>
            <img className={"image"} src={props.image}/>
            <h1 className={"text"}> Below this image could be text related to the last ivent.

                The image could be a link to all the photos.

                There could be information about the photographer who took the photos at the ivent.


                Below this image could be text related to the last ivent.
                The image could be a link to all the photos.There could be information about the photographer who took the photos at the ivent.


                There could be information about the photographer who took the photos at the event.
            </h1>
        </div>
    );
}

export function Blogitemleft(props) {
    return (
        <div className={"container-left"}>
            <img className={"image"} src={props.image}/>
            <h1 className={"text"}> Under this image could be text related to the announcement of an artist for the coming ivent.

                The image could be a link to the lineup or other artist announcements.

                There could be information about what music the artist is playing and what to expect from the set.
            </h1>
        </div>
    );
}

