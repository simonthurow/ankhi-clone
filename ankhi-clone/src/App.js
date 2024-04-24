import {
  collection, getDocs
} from 'firebase/firestore';

import Deck from './Decks.js';
import DeckList from './DeckList.js';
import db from './Firebase.js';
import './App.css';
import React, { useState, useEffect } from 'react';
import { SearchDecks } from './SearchDecks.js';

const userID = "7KmIAaU1E2b3SXpQQl3C";

function App() {

  const[allUserDecks, setAllUserDecks] = useState([]);

  //Fetch data from firebase database(id, name and userID)
  async function getData() {
    const snapshot = await getDocs(collection(db, "Decks"));
    const allData = [];
    snapshot.forEach((doc) => {
      if(doc.data().userID === userID)
        allData.push({id: doc.id, name: doc.data().name, userID: doc.data().userID});
    });
    setAllUserDecks(allData);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <html className="page">
      <header className="title">
        2Remember
      </header>
      <body className='body'>
        <div>
          <SearchDecks decks={allUserDecks}/>
        </div>
      </body>
    </html>

    
    
  );
}

export default App;
