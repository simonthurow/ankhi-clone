import React from 'react'
import { useState, useEffect } from 'react';
import "./CardSettings.css";

import Header from '../Header';
import LearnCardList from '../LearnCardList';
import DeckName from '../DeckName.js';

import {
    collection, getDocs,
    addDoc, deleteDoc, doc
} from 'firebase/firestore';
import db from '../Firebase.js';

//const deckID = "IqGcaqu6i4Gh86slwVN0";

const CardSettings = ({deckID, deckName}) => {
    const[cards, setCards] = useState([]);
    const[deleteState, setDeleteState] = useState(false);

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


    const deleteDeck = () => {
      if(!deleteState){
        document.getElementById('deckDeleter').style.background = "rgb(184, 67, 67)";
        setDeleteState(true);
      }
      else{
        const deckRef=doc(db, 'Decks', deckID);
        deleteDoc(deckRef)
            .then(()=>{
                console.log("Deleted",deckRef);
            })
            .catch((error) => {
                console.error("Error", error);
            })
        alert("Deck deleted!");
      }
    }

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
        <DeckName deckID={deckID} deckName={deckName}/>
        <div class="settingsButtons">
          <div id="deckDeleter" onClick={() => deleteDeck()}>
            Delete Deck!
          </div>
          <div class="cardAdder" onClick={()=>addCard()}>
            Add Card!
          </div>
        </div>
        
        <div class="cardList">
          <LearnCardList learnCards={cards} emptyHeading={"No cards found!"}/>
        </div>
    </div>
    
  )
}

export default CardSettings;