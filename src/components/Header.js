import React from 'react';
import Link from 'gatsby-link';

const activeStyle = {
  backgroundColor: '#595252',
  borderBottom: '1px solid #C49B66',
  color: 'white',
}

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">MP<span></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
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
            <Link activeStyle={activeStyle} className="nav-link" to="/resume/">Resume</Link>
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
