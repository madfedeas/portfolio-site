// Created a separate homepage from content

const Homepage = ({cart, deleteFromCart}) => {
    return (
        <div className="container pt-4">
            <h3>Homepage</h3>
            <p>Check out the latest in footwear fashions on our site.</p>
            <h5>Your Shopping Cart:</h5>
            <ul className="list-group">
                {cart.length < 1 && <li className="list-group-item" key="empty">No items yet!</li>}
                {cart.map(item => (
                <li className="list-group-item" key={item.id}>{item.name}, Size: {item.value}
                    <button type="button" className="btn-outline-danger btn-sm float-right" onClick={() => deleteFromCart(item)}>Delete</button>
                </li>
                ))}
            </ul>
            {/* Added extra spacing at the bottom for better fit on smaller screens */}
            <div style={{paddingBottom:"20vh"}}></div>
        </div>
    )
}
// To be imported into App.js
export default Homepage;