import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import firebase from "./firebase";

import Header from "./components/Header";
import Message from "./components/Message";
import MainPage from "./components/MainPage";
import Tracker from "./components/Tracker";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

import "./App.css";

class App extends Component {
  state = {
    isAuthentic: false,
    symptoms: [],
    message: null
  };

  // All functions - login into tracker
  onLogin = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user => {
      this.setState({isAuthentic: true});
    })
    .catch(error => console.error(error));
  };
  // Logout of tracker
  onLogout = () => {
    firebase.auth().signOut()
    .then(() => {
      this.setState({ isAuthentic: false });
    })
    .catch(error => console.error(error));
  }
  // Add entry
  addNewEntry = symp => {
    const symptomsRef = firebase.database().ref("symptoms");
    symp.slug = encodeURIComponent(symp.date);
    delete symp.key;
    symptomsRef.push(symp);
    this.setState({ message: "saved" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  // Update entry
  updateEntry = symp => {
    const sympRef = firebase.database().ref("symptoms/" + symp.key);
    sympRef.update({
      slug: encodeURIComponent(symp.date),
      date: symp.date,
      content: symp.content
    });
    this.setState({ message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  // Delete entry
  deleteEntry = symp => {
    if (window.confirm("Delete this entry?")) {
      const sympRef = firebase.database().ref("symptoms/" + symp.key);
      sympRef.remove();
      this.setState({ message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };
  componentDidMount(){
    const symptomsRef = firebase.database().ref("symptoms");
    symptomsRef.on("value", snapshot => {
      const symptoms = snapshot.val();
      const newStateEntries = [];
      for (let symp in symptoms) {
        newStateEntries.push({
          key: symp,
          slug: symptoms[symp].slug,
          date: symptoms[symp].date,
          content: symptoms[symp].content
        });
      }
      // When posts are saved in state, wanted to sort by date instead of by key
      newStateEntries.sort((a,b) => {
        let fa = a.date;
        let fb = b.date;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      this.setState({ symptoms: newStateEntries });
    });
  }

  // Render components
  render() {
    return (
      <Router>
        <div className="App">
          <Header isAuthentic={this.state.isAuthentic} onLogout={this.onLogout} />
          {/* This is where the message will be displayed (for a limited time) */}
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            {/* Route for main page */}
            <Route exact path="/"
              render={() => (
                <MainPage />
              )}
            />
            {/* Route for tracker page */}
            <Route exact path="/tracker"
              render={() => (
                <Tracker isAuthentic={this.state.isAuthentic} symptoms={this.state.symptoms}
                deleteEntry={this.deleteEntry} />
              )}
            />
            {/* Route for visiting an entry */}
            <Route path="/tracker/:symptomsSlug"
              render={props => {
                const symp = this.state.symptoms.find(
                  symp => symp.slug === props.match.params.symptomsSlug
                );
                if (symp) {
                  return <Entry symp={symp} />;
                } else {
                  return <Redirect to="/tracker" />;
                }
              }}
            />
            {/* Route to the login page */}
            <Route exact path="/login"
              render={() => // Ternary to see if you're logged in
                !this.state.isAuthentic ? (
                  <Login onLogin={this.onLogin} />
                ) : (
                  <Redirect to="/tracker" />
                )
              }
            />
            {/* Route for adding an entry */}
            <Route exact path="/new"
              render={() =>
                this.state.isAuthentic ? (
                <EntryForm
                  addNewEntry={this.addNewEntry}
                  symp={{ id: 0, slug: "", date: "", content: "" }}
                /> ) : (
                  <Redirect to="/tracker" />
                )
              }
            />
            {/* Route for editing an entry */}
            <Route path="/edit/:symptomsSlug"
              render={props => {
                const symp = this.state.symptoms.find(
                  symp => symp.slug === props.match.params.symptomsSlug
                );
                if (symp && this.state.isAuthentic) {
                  return <EntryForm updateEntry={this.updateEntry} symp={symp} />;
                } else {
                  return <Redirect to="/tracker" />;
                }
              }}
            />
            {/* Route if none of the others work */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
