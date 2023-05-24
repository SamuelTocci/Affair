import React from "react";
import './Team.css'
import {Blogitemright, Blogitemleft} from "./Blog-item";

import Imagehead from "../media/Images/ClubNachtSceno.jpg"
import Image1 from "../media/Images/OpenAirDangling.jpg"
import Image2 from "../media/Images/ClubnachtJekuSceno.jpg"




function Vision() {
    return (
        <div className={"right-align"}>
            <Blogitemleft image={Image1}  title={"Vision"} text={"Ambition  is  translated  into  unconventional  events  withan  emphasis  onexperiment,  solidarity  and  self-expression.  We  strive  to  make  our  visitors  party  in  aresponsible  and  mindful  way.  Something  we  implementpartly  through  our S a f e r   S p a c e  operation  and  inclusiveline  ups.  Through  temporary  scenographic  interventions,we expand the potential of our locations and explore theboundaries of conventional party cultureOur  target  group  includes  a  wide  range  of  young  peoplewho  are  looking  for  qualitative  and  inclusive  nightlife.Here,  we  see  the  nightlife  evolving  from  somethingpurely escapist to a community building process.Within   Affair,   shared   visions   and   ambitions   areenhanced  by  complementary  talents.  Mutual  cross-pollination  between  ideas  and  talents  is  never  far  away.Therefore,  organizingremains  a  constant  school  oflearning  for  us.  In  addition  to  the  interaction  betweenlearning  and  teaching,  Affair  also  gives  her  team  theopportunity  to  experiment  and  grow  professionallyoutside the boundaries of the collective.\n"}></Blogitemleft>

        </div>
    );
}

export default Vision