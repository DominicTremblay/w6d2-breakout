import React, { Component } from 'react';
import './NewTweet.css';
import PropTypes from 'prop-types';

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      // need to send the content to App
      console.log(this.state.content);
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
            onKeyDown={this.handleKeyDown}
          />
          <input type="submit" value="Tweet" />
          <span className="counter">140</span>
        </form>
      </section>
    );
  }
}

export default NewTweet;
