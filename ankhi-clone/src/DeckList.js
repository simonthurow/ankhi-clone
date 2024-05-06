import React from 'react'
import Deck from './Decks.js';
import './DeckList.css';

const DeckList = ({decks, emptyHeading}) => {
  const count = decks.length;
  let heading = emptyHeading;
  if(count > 0){
    const noun = count > 1 ? 'Decks' : 'Deck';
    heading = count + ' ' + noun + " found";
  }
  
  return (
    <section class="deckSection">
      <h2 className="decksHeader">{heading}</h2>
      <div className="deckList">
      {decks.map(deck => 
        <Deck deckName={deck.name} deckID={deck.id}/>
      )}
      </div>
    </section>

  )
}

export default DeckList;
