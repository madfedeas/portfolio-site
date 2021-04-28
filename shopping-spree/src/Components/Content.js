// Now a functional component so don't need to call React.Component
import Shoes from './Shoes';
import Socks from './Socks';

const Content = ({ page, setItem }) => {
    return ( // Both these are states that are changed when the nav menu links are clicked
        <div className="container pt-4">
            <h3>{page.title}</h3>
            <p>{page.content}</p>
            {/* Additional content displayed depending on which page we are on (slug check ternary) */}
            {(page.slug === "shoes") ? <Shoes setItem={setItem} /> : <Socks setItem={setItem} />}
            {/* Added extra spacing at the bottom for better fit on smaller screens */}
            <div style={{paddingBottom:"20vh"}}></div>
        </div>
    )
}
// To be imported into App.js
export default Content