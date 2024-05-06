import {
    collection, getDocs
  } from 'firebase/firestore';

import db from '../Firebase.js';
import './Home.css';
import React, { useState, useEffect } from 'react';
import SearchDecks from '../SearchDecks.js';
import Header from "../Header.js";

const userID = "7KmIAaU1E2b3SXpQQl3C";

function Home({userID}) {

  const[allUserDecks, setAllUserDecks] = useState([]);

  //Fetch data from firebase database(id, name and userID)
  async function getData() {
    const snapshot = await getDocs(collection(db, "Decks"));
    const allData = [];
    snapshot.forEach((doc) => {
      if(doc.data().userID === userID)
        allData.push({id: doc.id, name: doc.data().name, userID: doc.data().userID});
    });
    allData.sort();
    setAllUserDecks(allData);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <html className="homePage">
      <Header />
      <body className='body'>
        <div>
          <SearchDecks decks={allUserDecks}/>
        </div>
      </body>
    </html>

    
    
  );
}

export default Home;
