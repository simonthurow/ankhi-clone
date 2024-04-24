import React from 'react';
import './Decks.css';

const Decks = ({deckName}) => {
  return (
    <button className='deckButton'>
        {deckName}
    </button>
    
  )
}

export default Decks;
