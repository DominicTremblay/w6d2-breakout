import React, { Component } from 'react';
import './NewTweet.css';
import PropTypes from 'prop-types';

class NewTweet extends Component {
  // Having the value of an input box being assigned to the state
  // is called a controlled component.

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  // This updates the content of the state as we change the text area
  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  // Detect keystrokes in the text area.
  // if it's the enter key, addNewTweet is called
  handleKeyUp = event => {
    if (event.key === 'Enter') {
      // need to send the content to App
      this.props.addNewTweet(this.state.content);
      // reset the content of the text area
      this.setState({ content: '' });
    }
  };

  render() {
    return (
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <div className="error-msg" />
        <form className="clearfix">
          <textarea
            name="text"
            placeholder="What are you humming about?"
            value={this.state.content}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
          <input type="submit" value="Tweet" />
          <span className="counter">140</span>
        </form>
      </section>
    );
  }
}

export default NewTweet;
