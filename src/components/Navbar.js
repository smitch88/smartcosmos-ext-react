import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-full navbar-dark bg-primary sc-navbar">
        <div className="nav navbar-nav">
          <Link className="navbar-brand logo" to="/"></Link>
          <Link className="nav-item nav-link" activeClassName="active" to="/home">Home</Link>
          <Link className="nav-item nav-link" activeClassName="active" to="/objects">Objects</Link>
          <Link className="nav-item nav-link" activeClassName="active" to="/relationships">Relationships</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
