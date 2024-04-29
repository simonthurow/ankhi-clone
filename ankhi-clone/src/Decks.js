import React from 'react';
import './Decks.css';
import { BrowserRouter , Route, Routes, Switch, Link} from "react-router-dom";
import Learn from "./pages/Learn.js";
import App from './App';

const Decks = ({deckName}) => {
  return (
      <button className='deckButton' onClick={StartDeck}>
        {deckName}
      </button>
  )
}

const StartDeck = () => {
  
}

export default Decks;
