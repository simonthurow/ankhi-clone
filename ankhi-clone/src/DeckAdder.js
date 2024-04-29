import React from 'react'
import './DeckAdder.css'
import { Link } from 'react-router-dom'

const DeckAdder = () => {
    return (
        <Link to="/addDeck">
            <button className='deckAdderButton'>
                +
            </button>
        </Link>
      )
}

export default DeckAdder;