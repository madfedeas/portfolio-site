// Now a functional component so don't need to call React.Component

// Importing same component as header to add links to footer
import NavList from './NavList';

// Destructuring year while spread attributes pass remaining props {...rest} into NavList component
const Footer = ({year, ...rest}) => {
    return (
      <footer className="fixed-bottom">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <p className="navbar-brand mb-0">Copyright &#169; {year}</p>
          <div className="container-fluid">
            <div>
              <NavList {...rest} />
          </div>
        </div>
      </nav>
    </footer>
    )
}
// To be imported into App.js
export default Footer