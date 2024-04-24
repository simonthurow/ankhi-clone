import { useState } from 'react';
import DeckList from './DeckList';
import './SearchDecks.css';
import DeckAdder from './DeckAdder';

const filterDecks = (decks, searchDecks) => {
    let foundDecks = [];
    decks.forEach(deck => {
        if(deck.name.toLowerCase().includes(searchDecks.toLowerCase()))
            foundDecks.push(deck);
    });
    return foundDecks;
}

const SearchDecks = ({decks}) => {
  const[searchDecks, setSearchDecks] = useState('');
  const foundDecks = filterDecks(decks, searchDecks);

  const searchInputChange = () => {
    setSearchDecks(document.getElementById("searchInput").value);
    if(document.getElementById('searchInput').value.trim() !== ''){
      document.getElementById('addButton').classList.add('addButtonHighlight');
      document.getElementById('deckListId').classList.add('deckListHighlight');
    } else {
      document.getElementById('addButton').classList.remove('addButtonHighlight');
      document.getElementById('deckListId').classList.remove('deckListHighlight');
    }
  }

  return (
    <section>
      <div class="searchInputContainer">
        <input className="searchInput" id="searchInput" placeholder="Search Deck" value={searchDecks} onChange={searchInputChange}/>
      </div>
      <div id="addButton" className="addButton">
        <DeckAdder/>
      </div>
      <div id="deckListId" class="deckList">
        <DeckList decks={foundDecks} emptyHeading="No such Decks found!"/>
      </div>
    </section>
  )
}

export default SearchDecks;
