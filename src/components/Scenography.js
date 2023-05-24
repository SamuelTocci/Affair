import React from "react";
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Imagehead from "../media/Images/ClubNachtSceno.jpg"
import Image1 from "../media/Images/HabitatLights.jpg"
import Image2 from "../media/Images/ClubnachtJekuSceno.jpg"




function Scenography() {
    return (
        <div className={"right-align"}>
            <Blogitemleft image={Image1}  title={"Scenography"} text={"On a scenographic level, we try to create a visual reflection of our vision and identity, with a focus on experimentation and security. Through temporal architectural interventions, we expand the potential of our sites and create an extra dimension in the event. Each event we start completely from zero, taking into account what the site has to offer, which vibe the lineup provides, and what materials are available. This ensures that each event is given a completely different interpretation. Innovative light scenography and unconventional use of everyday materials is a constant motive in our way of working. Recognizable Affair elements are created by the reuse of iconic materials and are complemented by second-hand materials, the provision of the provincial lending service, and other local rental companies."}></Blogitemleft>

        </div>
    );
}

export default Scenography