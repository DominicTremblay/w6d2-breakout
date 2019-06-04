import React from 'react';
import './Article.css';
import PropTypes from 'prop-types';

const Article = props => {
  return (
    <article className="tweet" data-id="id">
      <header className="clearfix">
        <img src={props.user.avatars.small} alt="avatar" />
        <h3>{props.user.name}</h3>
        <h4>{props.user.handle}</h4>
      </header>

      <div className="content">{props.content.text}</div>

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

Article.propTypes = {
  id: PropTypes.string,
  content: PropTypes.object,
  user: PropTypes.object,
};

export default Article;
