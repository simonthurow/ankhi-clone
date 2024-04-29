import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <header className="title">
        2Remember
      </header>
    </Link>
  )
}

export default Header;