// Importing React.Component and individual components into App
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SimpleStorage from "react-simple-storage";

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Message from './Components/Message';
import NotFound from './Components/NotFound';

class App extends Component {
  // Using state for props and anything we want to change
  state = {
    name: "Shopping Spree",
    year: 2021,
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
    if (window.confirm("Add to cart?")) {
      item.id = this.state.cart.length + 1;
      // Item name and value already been assigned to item
      this.setState({
        cart: [...this.state.cart, item],
        message: "success"
      });
      setTimeout(() => {
        this.setState({message: null});
      }, 1600);
    }
  };

  deleteItem = item => {
    if (window.confirm("Remove from cart?")) {
      const updatedCart = this.state.cart.filter(i => i.id !== item.id);
      this.setState({
        cart: updatedCart,
        message: "danger"
      });
      setTimeout(() => {
        this.setState({message: null});
      }, 1600);
    }
  };

  render(){
    return (
      <Router>
        <SimpleStorage parent={this} />
        <Header {...this.state} />
        <SimpleStorage parent={this} />
        {this.state.message && <Message type={this.state.message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage cart={this.state.cart} deleteItem={this.deleteItem} />}
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
        <Footer {...this.state} />
      </Router>
    );
  }
}

export default App
