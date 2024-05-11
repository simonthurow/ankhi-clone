import React from 'react'
import { useState } from 'react';

import Header from '../Header';
import './Learn.css';
import { LearnCard } from '../LearnCard';
import DeckName from '../DeckName.js';

import {
  collection, getDocs,
  updateDoc, doc
} from 'firebase/firestore';
import db from '../Firebase.js';

import { Link} from "react-router-dom";

import { useEffect } from 'react';
import { setDeckName } from '../actions.js';

const Learn = ({deckID, deckName}) => {
  const[cards, setCards] = useState([]);
  const[currentIndex, setCurrentIndex] = useState(0);
  const[question, setQuestion] = useState("Click on 'Next Card!' to start learning!");
  const[answer, setAnswer] = useState("Click on 'Next Card!' to start learning!");
  const[thisDeckName, setThisDeckName] = useState("");
  
  async function getCardData() {
    const snapshotCards = await getDocs(collection(db, "Cards"));
    const allCards = [];
    snapshotCards.forEach((doc) => {
      if(doc.data().deckID === deckID /* && doc.data().dueDate <= todaysDate */)
        allCards.push({id: doc.id, front: doc.data().front, back: doc.data().back, deckID: doc.data().deckID});
    });
    setCards(allCards);
  }

  useEffect(() => {
    getCardData();
    setThisDeckName(deckName);
  }, []);


  function changeCard(){
    if(currentIndex<cards.length){
      setQuestion(cards[currentIndex].front)
      setAnswer(cards[currentIndex].back)
      setCurrentIndex(currentIndex+1); 
    } 
  }

  async function changeName(){
    let newDeckName = window.prompt("What should be the new Deck name?");
    if(newDeckName=="" || newDeckName==null){
      return;
    }
    const deckRef = doc(collection(db, "Decks"), deckID);
    updateDoc(deckRef, {
      name: newDeckName
    })
    .then(() => {
      setThisDeckName(newDeckName);
    })
    .catch((error) => {
      console.error("Document couldnt be updated", error);
    })   
  }

  return (
    <div class="learnPage">
        <Header />  
        <DeckName deckID={deckID} deckName={deckName}/>
        <div class="settings" >
          <Link to="/deckSettings"  style={{textDecoration: 'none'}}>
            <img src="../../settingsIcon.png" alt="settings" width="50" height="50"/>
          </Link>
        </div>
          <LearnCard front={question} back={answer} width="500px" height="200px"/>
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
