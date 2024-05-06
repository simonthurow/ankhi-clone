import React, { useEffect } from 'react'
import { useState } from 'react';
import './LearnCard.css';

export const LearnCard = ({front, back}) => {
    const[cardText, setCardText] = useState("");
    const[cardState, setCardState] = useState("");

    useEffect(() => {
        setCardText(front);
        setCardState("FRONT")
    },[front, back]);

    const switchCardText = () => {
        cardText==front ? setCardText(back) : setCardText(front);
        cardState=="FRONT" ? setCardState("BACK") : setCardState("FRONT");
    }

    return (
        <div class="wrapper">
            <div class="cardState">
                {cardState}
            </div>
           
            <div class="card" onClick={() => {switchCardText()}}>
                {cardText}
            </div>
        </div>
      
    )
}
