import React from 'react';
import './Article.css';
import PropTypes from 'prop-types';

const Article = props => {
  return (
    <article className="tweet">
      <header className="clearfix">
        <img src="" alt="avatar" />
        <h3>Name</h3>
        <h4>Handle</h4>
      </header>

      <div className="content">Content</div>

      <footer className="clearfix">
        <p className="time-stamp">10 days ago</p>
        <div className="icons">
          <i className="fas fa-flag" />
          <i className="fas fa-heart" />
          <i className="fas fa-retweet" />
        </div>
      </footer>
    </article>
  );
};

export default Article;
