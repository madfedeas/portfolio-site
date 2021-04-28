// Imported images to be added later with {keywords}
import blacksock from './Pics/blacksock.JPG';
import bluesock from './Pics/bluesock.JPG';

import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Socks = ({ setItem }) => {

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
            {
              label: 'No',
            }
          ]
        });
      };

    return ( // Three columns of images to match the shoe screen with dropdown for size choice
        <>
        <div className="row">
            <figure className="col-sm">
                <img className="d-block w-100" src={blacksock} alt="Black Socks" />
                <figcaption className="figure-caption">Black Socks</figcaption>
                Size: <select className="custom-select" name="Black Socks" onChange={addToCart}>
                    <option value="none">---</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </figure>
            <figure className="col-sm">
                <img className="d-block w-100" src={bluesock} alt="Blue Socks" />
                <figcaption className="figure-caption">Blue Socks</figcaption>
                Size: <select className="custom-select" name="Blue Socks" onChange={addToCart}>
                    <option value="none">---</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </figure>
            <figure className="col-sm">
                <img className="d-block w-100" src="https://picsum.photos/id/0/400" alt="Buy now!" />
                <figcaption className="figure-caption">Ordering online made easy!</figcaption>
            </figure>
        </div>
        <Link className="btn btn-outline-primary btn-block" to="/">Back to Shopping Cart</Link>
        </>
    )
}

// To be imported into Content.js
export default Socks;


