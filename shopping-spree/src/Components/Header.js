// Using a Link from react-router-dom
import { Link } from 'react-router-dom';

// Importing another component
import NavList from './NavList';

// Destructuring name while spread attributes pass remaining props {...rest} into NavList component
const Header = ({ pages }) => {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          {/* Linking to the main page localhost:3000 page (homepage) */}
          <h1 className="navbar-brand mb-0"><Link to="/">Shopping Spree</Link></h1>
            <div className="container-fluid">
              <div>
                <NavList pages={pages} />
              </div>
            </div>
        </nav>
      </header>
    )
};

// To be imported into App.js
export default Header;