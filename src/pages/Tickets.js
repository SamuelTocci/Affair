import react from 'react'
import {Route, Switch} from "react-router-dom";
import TicketsStyle from "./Tickets.css"
import CheckoutProgress from "../res/checkoutProgress.svg"
import ContinuePayment from "../res/ContinuePayment.svg"

function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        context.fillRect(20,20,100,100);
        context.clearRect(40,40,60,60);
        context.strokeRect(45,45,50,50);
    }
}



const Tickets = () => {
    return (
        <div id={"ticketwrapper"}>
            <div id={"main"}>
                <img src={CheckoutProgress} id={"checkoutProgress"}/>
                <div id={"firstWave"}>
                    <p className={"ticketTitle"}>Early birds: wave 1</p>
                    <p className={"ticketPrice"}>€ 6</p>
                </div>
                <div id={"secondWave"}>
                    <p className={"ticketTitle"}>Regular release: wave 2</p>
                    <p className={"ticketPrice"}>€ 7</p>
                </div>
                <div id={"thirdWave"}>
                    <p className={"ticketTitle"}>Late night affair: wave 3</p>
                    <p className={"ticketPrice"}>€ 8</p>
                </div>
                <img src={ContinuePayment} id={"continuePayment"}/>
            </div>
        </div>
    );
}

export default Tickets;