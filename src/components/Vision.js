import React from "react";
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Image1 from "../media/Image1-crowd.svg"
import Image2 from "../media/Image2-helpinghand.svg"


function Vision() {
    return (
        <div className={"right-align"}>
            <Blogitemright image={Image1}></Blogitemright>
            <Blogitemleft image={Image2}></Blogitemleft>
        </div>
    );
}

export default Vision