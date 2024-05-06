import React from 'react'
import Header from '../Header';
import './AddDeck.css';

import {
  collection, addDoc
} from 'firebase/firestore';

import db from '../Firebase.js';

const userID = "7KmIAaU1E2b3SXpQQl3C";

const addDeckToUser = (thisUserID, deckName) => {
  if(deckName != ""){
    const deckCollection = collection(db, 'Decks')
    const deckData = {
      name: deckName,
      userID: thisUserID
    }

    addDoc(deckCollection, deckData);
    document.getElementById("newDeckInputID").value="";
    alert("Deck '"+deckName+"' added to your Collection!");
    //console.log(userID, deckName);
  }
  else {
    alert("Please fill in the input!");
  }
}

const AddDeck = () => {
  return (
    <div class="learnPage">
        <Header />
        <div class="inputFields">
          <input id="newDeckInputID" class="newDeckInput" placeholder='Type in your new Decks name!'/>
          <button class="addDeckButton" onClick={() => (addDeckToUser(userID, document.getElementById('newDeckInputID').value))}>
            Submit new Deck!
          </button>
        </div>
    </div>
    
  )
}

export default AddDeck;
