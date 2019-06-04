import React, { Component } from 'react';
import './NewTweet.css';
import PropTypes from 'prop-types';

class NewTweet extends Component {
  render() {
    return (
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <div className="error-msg" />
        <form className="clearfix">
          <textarea name="text" placeholder="What are you humming about?" />
          <input type="submit" value="Tweet" />
          <span className="counter">140</span>
        </form>
      </section>
    );
  }
}

export default NewTweet;
