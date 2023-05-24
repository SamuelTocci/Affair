import React from "react";
import './Team.css'
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Imagehead from "../media/Images/ClubNachtSceno.jpg"
import Image1 from "../media/Images/StelplazaPalmboom.jpg"
import Image2 from "../media/Images/ClubnachtJekuSceno.jpg"




function SaferSpaces() {
    return (
        <div className={"right-align"}>
            <Blogitemleft image={Image1}  title={"Safer Spaces"} text={"A safer space is a place where people not only feel safer physically, but also emotionally and psychologically. Creating such spaces is especially important for marginalized groups who are often exposed to discrimination and exclusion in other social contexts. A proper mindset can be created by implementing clear 'rules' and guidelines that help participants communicate, respect each other, and collaborate in a safe and inclusive environment. This may include matters such as language, respect for personal boundaries, acceptance of different opinions and experiences, and willingness to learn and grow. In doing so, power structures, interrelated and tiered individual experiences, and privileges must be taken into account. Safer spaces are there to be free from prejudice, conflict, criticism, or potentially threatening actions, ideas, or conversations. Before, during, and after our events, we want to provide our audience, volunteers, and artists with this important framework. We add the word 'braver' to the conversation, emphasizing that we want to give space to people who feel the need to experiment with themselves. To further develop and improve our safer/braver concept, we organize workshops and meetings with a team of volunteers. During our events, we implement a hands-on approach, where we give everyone a brief explanation of our shared values and code of conduct upon arrival. Our team of Safety volunteers is there for anyone who needs a helping hand or a chat. We have a zero-tolerance policy against harassment, discrimination, hatred, shaming, and violence. We act where necessary and look out for each other."}></Blogitemleft>

        </div>
    );
}

export default SaferSpaces