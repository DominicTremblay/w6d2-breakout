import React from 'react';
import './AllTweets.css';
import Article from './Article';
import PropTypes from 'prop-types';

const AllTweets = ({ tweets }) => {
  const tweetList = tweets.map(tweetObj => (
    <Article
      key={tweetObj._id}
      id={tweetObj._id}
      user={tweetObj.user}
      content={tweetObj.content}
    />
  ));

  return <section id="all-tweets">{tweetList}</section>;
};

AllTweets.propTypes = {
  tweets: PropTypes.array,
};

export default AllTweets;
