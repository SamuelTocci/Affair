import react, {useEffect, useState} from 'react'
import {Route, Switch} from "react-router-dom";
import TicketsStyle from "./Tickets.css"
import CheckoutProgress from "../res/checkoutProgress.svg"
import ContinuePayment from "../res/ContinuePayment.svg"
import Home from "./Home";
import React from "react";
import Wave from "../components/Wave";
import TicketTotal from "../components/TicketTotal"

function useWaveAmount () {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        function handleAmountChange(){
            setTotal()
        }
    });

    return total;
}

function continuePayment() {

    window.open('https://weer.sluispark.be/?p=mnu_webcam')
}

const Tickets = () => {
    return (
        <div id={"ticketwrapper"}>
            <div id={"main"}>
                <img src={CheckoutProgress} id={"checkoutProgress"}/>
                <Wave title={"Early birds: wave 1"} price={6}/>
                <Wave title={"Regular release: wave 2"} price={7}/>
                <Wave title={"Late night affair: wave 3"} price={8}/>
                <div id={"ticketTotal"}>
                    <img src={ContinuePayment} id={"continuePayment"} onClick={continuePayment}/>
                    <TicketTotal total={useWaveAmount()}/>
                </div>
            </div>
        </div>
    );
}

export default Tickets;