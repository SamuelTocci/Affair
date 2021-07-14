import React, {useEffect, useState} from 'react'
import TicketTotalStyle from '../components/TicketTotal.css'

function TicketTotal(props) {
    return(
        <div id={"position"}>
            <div id={"total"}>Total: €{props.total}</div>
            <div id={"feesText"}>&ensp; + fees</div>
        </div>
    );
}

export default TicketTotal;