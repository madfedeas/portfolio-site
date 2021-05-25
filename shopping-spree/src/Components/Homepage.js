// Created a separate homepage from content

const Homepage = ({cart, deleteFromCart, prices}) => {

    // Function to add prices of all items, add tax and display total (to 2 digits)
    const calculateTotal = () => {
        let subtotal = 0;
        let tax = 0.07;
        let addedTax = 0;
        let total = 0;
        for (let i = 0; i < cart.length; i++){
            switch (cart[i]["name"]){
                case "White Tennis Shoes":
                    subtotal += prices.shoe;
                    break;
                case "Red Heel":
                    subtotal += prices.heel;
                    break;
                case "Brown Hiking Boot":
                    subtotal += prices.boot;
                    break;
                case "Black Socks":
                    subtotal += prices.black;
                    break;
                case "Blue Socks":
                    subtotal += prices.blue;
                    break;
                default:
                    break;
            }
        }
        addedTax = subtotal * tax;
        total = subtotal + addedTax;
        return total.toFixed(2);
    };

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
            <h5 className="pt-4 text-center">Total: ${calculateTotal()}*</h5>
            {/* Added extra spacing at the bottom for better fit on smaller screens */}
            <div style={{paddingBottom:"25vh"}}></div>
        </div>
    )
}
// To be imported into App.js
export default Homepage;