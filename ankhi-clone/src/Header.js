import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="title">
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          2Remember
        </Link>
      </header>
  )
}

export default Header;