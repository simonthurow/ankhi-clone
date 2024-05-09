import React, { useEffect } from 'react'
import { useState } from 'react';
import './LearnCard.css';

export const LearnCard = ({front, back, width, height, font, wrapperMargin}) => {
    const[cardText, setCardText] = useState("");
    const[cardState, setCardState] = useState("");

    useEffect(() => {
        setCardText(front);
        setCardState("FRONT")
    },[front, back]);

    const switchCardText = () => {
        //let card = document.getElementById('card');
        //card.classList.remove('turn')
        //void card.offsetWidth;
        //card.classList.add('turn')
        cardText==front ? setCardText(back) : setCardText(front);
        cardState=="FRONT" ? setCardState("BACK") : setCardState("FRONT");
    }

    return (
        <div class="wrapper" style={{marginTop: wrapperMargin}}>
            <div class="cardState" style={{fontSize: font}}>
                {cardState}
            </div>
           
            <div id="card" onClick={() => {switchCardText()}} style={{width: width, height: height, fontSize: font}}>
                <p class="cardText">
                    {cardText}
                </p>
            </div>
        </div>
      
    )
}
