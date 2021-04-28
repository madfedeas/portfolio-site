// Imported images to be added later with {keywords}
import shoe from './Pics/shoe.JPG';
import heel from './Pics/redheel.JPG';
import boot from './Pics/hikingboot.JPG';

import { Link } from "react-router-dom"

const Shoes = ({ setItem }) => {

    const handleCart = e => {
        e.preventDefault();
        const item = {
          name: e.target.name,
          value: e.target.value
        };
        setItem(item);
    };

    return ( // Three columns of available shoes with dropdown for size choice
        <>
        <div className="row">
            <figure className="col-sm">
                <img className="d-block w-100" src={shoe} alt="White Tennis Shoe" />
                <figcaption className="figure-caption">White Tennis Shoe</figcaption>
                Size: <select name="White Tennis Shoe" onChange={handleCart}>
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
                Size: <select name="Red Heel" onChange={handleCart}>
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
                Size: <select name="Brown Hiking Boot" onChange={handleCart}>
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

export default Shoes