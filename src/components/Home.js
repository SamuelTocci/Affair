import React from "react";
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Image1 from "../media/Images/_DSF1226.jpeg"
import Image2 from "../media/Images/Laure R-5444-54440019.jpg"


function Home() {
        return (
            <div className={"right-align"}>
                <Blogitemright image={Image1}></Blogitemright>
                <Blogitemleft image={Image2}></Blogitemleft>
            </div>
        );
}

export default Home