import React from 'react'
import { useState } from 'react';

import Header from '../Header';
import './Learn.css';
import { LearnCard } from '../LearnCard';

import {
  collection, getDocs
} from 'firebase/firestore';
import db from '../Firebase.js';

import { useEffect } from 'react';

const Learn = ({deckID, deckName}) => {
  const[cards, setCards] = useState([]);
  const[currentIndex, setCurrentIndex] = useState(0);
  const[question, setQuestion] = useState("Click on 'Next Card!' to start learning!");
  const[answer, setAnswer] = useState("Click on 'Next Card!' to start learning!");
  console.log(deckID)
  
  async function getCardData() {
    const snapshotCards = await getDocs(collection(db, "Cards"));
    const allCards = [];
    snapshotCards.forEach((doc) => {
      if(doc.data().deckID === deckID)
        allCards.push({id: doc.id, front: doc.data().front, back: doc.data().back, deckID: doc.data().deckID});
    });
    setCards(allCards);
  }

  useEffect(() => {
    getCardData();
  }, []);

  function changeCard(){
    if(currentIndex<cards.length){
      setQuestion(cards[currentIndex].front)
      setAnswer(cards[currentIndex].back)
      setCurrentIndex(currentIndex+1); 
    } 
  }

  return (
    <div class="learnPage">
        <Header />  
        <div class="deckName">
          ({deckName})
        </div>
        <LearnCard front={question} back={answer}/>
        <div id="learnedCounter">
          {currentIndex}/{cards.length}
        </div>
        <button class="changeButton" onClick={() => changeCard()}>
          Next Card!
        </button>
    </div>
    
  )
}

export default Learn;
