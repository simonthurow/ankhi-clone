import React from 'react'
import { useState } from 'react';
import './LearnCard.css';

export const LearnCard = ({front, back}) => {
    const[cardText, setCardText] = useState(front);

    const switchCardText = () => {
        if(cardText == front){
            setCardText(back);
        }
        else{
            setCardText(front);
        }
    }

    return (
      <div class="card" onClick={() => {switchCardText()}}>
          {cardText}
      </div>
    )
}
