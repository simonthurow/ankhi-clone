import React from 'react'
import './DeckAdder.css'
import { Link } from 'react-router-dom'

const DeckAdder = () => {
    return (
        <Link to="/addDeck" style={{textDecoration: 'none'}}>
            <div className='deckAdderButton'>
                Add Deck
            </div>
        </Link>
      )
}

export default DeckAdder;