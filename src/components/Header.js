import React from 'react';
import Link from 'gatsby-link';

const activeStyle = {
  backgroundColor: '#595252',
  borderBottom: '2px solid #C49B66',
  color: 'white',
}

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="nav-header">
        <a className="navbar-brand" href="#">M<span>P</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <input type="checkbox" className="checkbox"  id="navi-toggle" />
          <label htmlFor="navi-toggle" className="checkbox__button"><span className="checkbox__icon">&nbsp;</span></label>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link exact   activeStyle={activeStyle} className="nav-link active" to="/">Home<span className="sr-only" /></Link>
          </li>
          <li className="nav-item">
            <Link activeStyle={activeStyle} className="nav-link" to="/about/">About</Link>
          </li>
          <li className="nav-item">
            <Link activeStyle={activeStyle} className="nav-link" to="/projects/">Projects</Link>
          </li>
          <li className="nav-item">
            <Link activeStyle={activeStyle} className="nav-link" to="/resume/">Resumé</Link>
          </li>
          <li className="nav-item">
            <Link activeStyle={activeStyle} className="nav-link" to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
