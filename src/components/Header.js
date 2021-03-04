import React from "react";
import { Link } from "react-router-dom";

const Header = ({isAuthentic, onLogout}) => (
  <header className="App-header">
    <ul className="container">
      <li className="title-page">
        <Link to="/">COVID-19</Link>
      </li>
      <li>
        <Link to="/tracker">Symptoms Tracker</Link>
      </li>
      {isAuthentic ? (
        <>
        <li>
          <Link to="/new">New Entry</Link>
        </li>
        <li>
          <a href="/" onClick={event => {
            event.preventDefault();
            onLogout();}
            }>Logout</a>
        </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  </header>
);
export default Header;
