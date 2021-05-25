import React, {Component} from 'react';
import Fillout from "./components/Fillout";
import Story from "./components/Story";
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    showStory: false,
    pageTitle: "Remember: a noun is a person, place, or thing.",
    verbed1: "",
    adj1: "",
    surname1: "",
    verbed2: "",
    adj2: "",
    verbing1: "",
    verb1: "",
    noun1: "",
    noun2: "",
    familymember1: "",
    number1: "",
    adj3: "",
    plnoun1: "",
    verb2: "",
    familymember2: "",
    plnoun2: "",
    city1: "",
    verbed3: "",
    surname2: "",
    adj4: "",
    color1: "",
    noun3: "",
    verbing2: "",
    occupation1: "",
    adj5: "",
    noun4: "",
    plfamilymember1: "",
    adj6: "",
    noun5: "",
    adj7: "",
    adverb1: "",
    occupation2: "",
    soundeffect: ""
  };
  this.handleWord = this.handleWord.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  handleWord = (e) => {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]:value});
  }

  onSubmit = () => {
    this.setState({showStory: true});
    this.setState({pageTitle: "Last Will and Testament"});
  }

  tryAgain = () => {
    this.setState({showStory: false});
    this.setState({pageTitle: "Remember: an adverb describes a verb, an adjective describs a noun!"});
  }

  render(){
    return (
      <>
      <header className={css(styles.bounce)}>
        <h1>Fill In the Blanks!</h1>
        <h2>{this.state.pageTitle}</h2>
      </header>
      <div className="moving"></div>
      {(this.state.showStory) ? <Story {...this.state} tryAgain={this.tryAgain} />
      : <Fillout {...this.state} handleWord={this.handleWord} onSubmit={this.onSubmit} />}
      </>
    );
  }
}

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1.5s',
    animationIterationCount: '3',
  }
});

export default App;
