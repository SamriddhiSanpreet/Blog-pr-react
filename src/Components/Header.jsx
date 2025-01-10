import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='d-flex justify-between'>
      <div className="logo">
        <h4>Blog</h4>
      </div>
      <nav>
        <ul className='d-flex'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">View</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
