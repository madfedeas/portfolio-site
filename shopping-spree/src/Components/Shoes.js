// Imported images to be added later with {keywords}
import shoe from './Pics/whiteshoe.jpg';
import heel from './Pics/redheel.jpg';
import boot from './Pics/hikingboot.jpg';

import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Shoes = ({ setItem }) => {

    // Custom alert box allows user to pick whether to add item to cart
    // If user selects yes, creates object "item" to be added to state {cart} in App.js
    const addToCart = (e) => {
        confirmAlert({
          title: 'Add to cart?',
          message: 'You may review your selected items on the homepage.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                e.preventDefault();
                const item = {
                    name: e.target.name,
                    value: e.target.value
                };
                if (item.value !== "none"){
                    setItem(item);
                }
              }
            },
            { label: 'No' }
          ]
        });
      };

    return ( // Three columns of available shoes with dropdown for size choice
        <>
        <div className="row">
            <figure className="col-sm">
                <img className="d-block w-100" src={shoe} alt="White Tennis Shoe" />
                <figcaption className="figure-caption">White Tennis Shoe</figcaption>
                Size: <select className="custom-select" name="White Tennis Shoe" onChange={addToCart}>
                    <option value="none">---</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </figure>
            <figure className="col-sm">
                <img className="d-block w-100" src={heel} alt="Red Heel" />
                <figcaption className="figure-caption">Red Heel</figcaption>
                Size: <select className="custom-select" name="Red Heel" onChange={addToCart}>
                    <option value="none">---</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </figure>
            <figure className="col-sm">
                <img className="d-block w-100" src={boot} alt="Brown Hiking Boot" />
                <figcaption className="figure-caption">Brown Hiking Boot</figcaption>
                Size: <select className="custom-select" name="Brown Hiking Boot" onChange={addToCart}>
                    <option value="none">---</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </figure>
        </div>
        <Link className="btn btn-outline-primary btn-block" to="/">Back to Shopping Cart</Link>
        </>
    )
}

// To be imported into Content.js
export default Shoes;