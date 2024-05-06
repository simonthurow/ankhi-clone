import React, { useState } from 'react';
import './Decks.css';
import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setDeckID, setDeckName } from './actions';

const Decks = ({deckName, deckID}) => {
  const dispatch = useDispatch();

  const StartDeck = (deckID) => {
    dispatch(setDeckID(deckID))
    dispatch(setDeckName(deckName))
  }

  return (
    <Link to="/learn" style={{textDecoration: 'none'}}>

        <div className='deckButton' onClick={() => {StartDeck(deckID)}}>
          {deckName}
        </div> 
    
    </Link>
      
  )
}


export default Decks;
