import { useState } from 'react';
import DeckList from './DeckList';
import './SearchDecks.css';

const filterDecks = (decks, searchDecks) => {
    let foundDecks = [{name: "+"}];
    decks.forEach(deck => {
        if(deck.name.toLowerCase().includes(searchDecks.toLowerCase()))
            foundDecks.push(deck);
    });
    return foundDecks;
}

export const SearchDecks = ({decks}) => {
  const[searchDecks, setSearchDecks] = useState('');
  const foundDecks = filterDecks(decks, searchDecks);
  return (
    <section>
      <input className="searchInput" id="searchInput" placeholder="Search Deck" value={searchDecks} onChange={() => setSearchDecks(document.getElementById("searchInput").value)}/>
      <DeckList decks={foundDecks} emptyHeading="No such Decks found!"/>
    </section>
  )
}
