// Importing React.Component and individual components into App
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SimpleStorage from 'react-simple-storage';
// Downloaded custom alert box for when users want to add/delete items from cart
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Message from './Components/Message';
import NotFound from './Components/NotFound';

class App extends Component {
  // Using state for props and anything we want to change
  state = {
    message: null,
    pages: [
      {
        id: 1,
        slug: "shoes",
        title: "Shoes",
        content: "Shop here for the latest in footwear apparel."
      },
      {
        id: 2,
        slug: "socks",
        title: "Socks",
        content: "Keep your feet warm and stylish too!"
      }
    ],
    cart: []
  };

  setItem = item => {
    // if/else to prevent same id being assigned more than once
    let lastItem = this.state.cart[this.state.cart.length - 1];
    if (lastItem === undefined){
      item.id = this.state.cart.length + 1;
    }
    else {
      item.id = lastItem.id + 1;
    }
    // Item name and value already been assigned to item
    this.setState({ // Add item object to the cart and display "added" message
      cart: [...this.state.cart, item],
      message: "success",
    });
    setTimeout(() => {
      this.setState({message: null});
    }, 1600);
  };

  deleteFromCart = (item) => {
    confirmAlert({
      title: 'Remove item?',
      message: 'Are you sure you want to remove this item from your cart?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => { // Filter out selected id and display "removed" message
            const updatedCart = this.state.cart.filter(i => i.id !== item.id);
            this.setState({
              cart: updatedCart,
              message: "danger"
            });
            setTimeout(() => {
              this.setState({message: null});
            }, 1600);
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };

  render(){
    return (
      <Router>
        <SimpleStorage parent={this} />
        <Header pages={this.state.pages} />
        <SimpleStorage parent={this} />
        {this.state.message && <Message type={this.state.message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage cart={this.state.cart} deleteFromCart={this.deleteFromCart} />}
          /> {/* Calls a separate homepage component to easily navigate back to */}
          <Route
            extact
            path="/:postSlug"
            render={props => {
              const page = this.state.pages.find(
                page => page.slug === props.match.params.postSlug);
                if (page) return <Content page={page} setItem={this.setItem} />
                else return <NotFound />; // If no such slug exists, display 404 page
            }}
          />
        </Switch>
        <Footer pages={this.state.pages} />
      </Router>
    );
  }
}

export default App;
