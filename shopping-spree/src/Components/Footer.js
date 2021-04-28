// Now a functional component so don't need to call React.Component

// Importing same component as header to add links to footer
import NavList from './NavList';

let d = new Date();
let year = d.getFullYear();

const Footer = ({ pages }) => {
    return (
      <footer className="fixed-bottom">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <p className="navbar-brand mb-0">Copyright &#169; {year}</p>
          <div className="container-fluid">
            <div>
              <NavList pages={pages} />
          </div>
        </div>
      </nav>
    </footer>
    )
}
// To be imported into App.js
export default Footer;