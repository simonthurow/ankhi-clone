import React from 'react'
import {LearnCard} from './LearnCard.js';
import { DeleteCard } from './DeleteCard.js';
import './LearnCardList.css';


const LearnCardList = ({learnCards, emptyHeading}) => {
  const count = learnCards.length;
  let heading = emptyHeading;
  if(count > 0){
    const noun = count > 1 ? 'Cards' : 'Cards';
    heading = count + ' ' + noun + " found";
  }
  
  return (
    <section class="cardSection">
      <h2 className="cardsHeader">{heading}</h2>
      <div className="cardList">
      {learnCards.map(card => 
        <div class="singleCard">
            <LearnCard front={card.front} back={card.back} width="80px" height="20px" font="10px" wrapperMargin={"0px"}/>
            <DeleteCard cardID={card.id}/>
        </div>    
      )}
      </div>
    </section>

  )
}

export default LearnCardList;
