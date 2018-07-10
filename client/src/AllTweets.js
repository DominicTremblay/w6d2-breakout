import React from "react";
import "./AllTweets.css";
import Article from "./Article";
import PropTypes from "prop-types";

const AllTweets = props => {
  const { tweets } = props;
  const articles = tweets.map(tweet => {
    return (
      <Article key={tweet._id} user={tweet.user} content={tweet.content} />
    );
  });
  return <section id="all-tweets">{articles}</section>;
};

AllTweets.propTypes = {
  tweets: PropTypes.array
};

export default AllTweets;
