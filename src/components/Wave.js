import React, {useEffect, useState} from "react";
import WaveStyle from "./Wave.css"

function Wave(props) {

    const [amount, setAmount] = useState(0);

    function editAmount(num) {
        if (amount < 8) {
            if (num > 0 || amount -1 >= 0) {
                setAmount(amount + num)
            }
        }
        if(amount >= 8 && num < 0){
            setAmount(amount + num)
        }
    }

    return(
        <div id={"firstWave"}>
            <p className={"ticketTitle"}>
                {props.title}
            </p>
            <p className={"ticketPrice"}>€ {props.price}</p>
            <div id={"count"}>
                <div id={"min"} onClick={() => editAmount(-1)}> - </div>
                <div id={"numberBox"}> {amount} </div>
                <div id={"plus"} onClick={() => editAmount(+1)}> + </div>
            </div>
        </div>
    );
}

export default Wave;