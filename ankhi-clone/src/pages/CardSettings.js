import React from 'react'
import { useState, useEffect } from 'react';
import "./CardSettings.css";

import Header from '../Header';
import LearnCardList from '../LearnCardList';

import {
    collection, getDocs,
    addDoc
  } from 'firebase/firestore';
  import db from '../Firebase.js';

//const deckID = "IqGcaqu6i4Gh86slwVN0";

const CardSettings = ({deckID}) => {
    const[cards, setCards] = useState([]);

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

    const addCard = () => {
      let cardFront = window.prompt("What ist the question?");
      let cardBack = window.prompt("What is the answer?")
      if((cardFront=="" || cardFront==null) || (cardBack=="" || cardBack==null)){
        return;
      }
      const cardCollection = collection(db, "Cards");
      const cardData = {
        front: cardFront,
        back: cardBack,
        deckID: deckID
      }
      addDoc(cardCollection, cardData);
    }
    

  return (
    <div>
        <Header/>
        <div class="cardAdder" onClick={()=>addCard()}>
          Add Card!
        </div>
        <div class="cardList">
          <LearnCardList learnCards={cards} emptyHeading={"No such cards found"}/>
        </div>
    </div>
    
  )
}

export default CardSettings;