import React from 'react';
import './AllTweets.css';
import Article from './Article';
import PropTypes from 'prop-types';

const AllTweets = props => {
  return (
    <section id="all-tweets">
      <Article />
    </section>
  );
};

AllTweets.propTypes = {
  tweets: PropTypes.array,
};

export default AllTweets;
