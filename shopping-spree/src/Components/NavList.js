// Using a Link from react-router-dom
// Instead of a function to handle clicking on links
import { Link } from "react-router-dom"

// pages object passed down from App component
const NavList = ({pages}) => {
    return (
        <ul className="navbar-collapse navbar-nav mr-auto">
            {/* Use pages.map to post all links */}
            {pages.map(page => (
            <li className="nav-item" key={page.id}>
                <Link to={`/${page.slug}`} className="nav-link">{page.title}</Link>
            </li>))}
        </ul>
    )
};
// To be imported into Header.js and Footer.js
export default NavList