import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

import "react-quill/dist/quill.snow.css";

class EntryForm extends Component {
  state = {
    symp: {
      key: this.props.symp.key,
      slug: this.props.symp.slug,
      date: this.props.symp.date,
      content: this.props.symp.content
    },
    saved: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.symp.key !== this.props.symp.key) {
      this.setState({
        symp: {
          key: this.props.symp.key,
          slug: this.props.symp.slug,
          date: this.props.symp.date,
          content: this.props.symp.content
        }
      });
    }
  }
  handleNewEntry = event => {
    event.preventDefault();
    if (this.state.symp.date) {
      if (this.props.updateEntry) {
        this.props.updateEntry(this.state.symp);
      } else {
        this.props.addNewEntry(this.state.symp);
      }
      this.setState({ saved: true });
    } else {
      alert("Date required");
    }
  };
  render() {
    if (this.state.saved === true) {
      return <Redirect to="/tracker" />;
    }
    return (
      <form className="container" onSubmit={this.handleNewEntry}>
        <h1>Add a New Entry to the Symptom Tracker</h1>
        <p>
          <label htmlFor="form-date">Date:</label>
          <br />
          <input
            defaultValue={this.props.date}
            id="form-date" type="date"
            value={this.state.symp.date}
            onChange={event =>
              this.setState({
                symp: {
                  ...this.state.symp,
                  date: event.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="form-content">Content:</label>
        </p>
        <Quill
          defaultValue={this.state.symp.content}
          onChange={(content, delta, source, editor) => {
            this.setState({
              symp: {
                ...this.state.symp,
                content: editor.getContents()
              }
            });
          }}
        />
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default EntryForm;
