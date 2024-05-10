import React, { useState } from 'react'

import './DeckName.css';

import {
    collection, getDocs,
    updateDoc, doc
} from 'firebase/firestore';
import db from './Firebase.js';

const DeckName = ({deckID, deckName}) => {
    const[thisDeckName, setDeckName] = useState(deckName);

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
            setDeckName(newDeckName);
        })
        .catch((error) => {
          console.error("Document couldnt be updated", error);
        })   
      }

    return (
      <div class="deckName" onClick={()=>changeName()}>
          ({thisDeckName})
      </div>
    )
}

export default DeckName;