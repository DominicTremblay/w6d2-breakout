import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import NewTweet from './newtweet';
import AllTweets from './AllTweets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  addNewTweet = content => {
    // Create a post request to the back end
    fetch('http://localhost:8080/tweets', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ text: content }),
    })
      .then(response => response.json())
      // Back end is sending back the full tweet object
      .then(tweet => {
        // Update the state with the new tweet object
        this.setState({ tweets: [tweet, ...this.state.tweets] });
      })
      .catch(error => console.error(`Fetch Error =\n`, error));
  };

  componentDidMount() {
    fetch('/tweets')
      .then(result => result.json())
      .then(tweetArr => {
        // Updating the state with the tweets we get from the request
        return this.setState({ tweets: tweetArr });
      })
      .catch(error => console.log('Error:', error))
      .finally(() => console.log('Getting the tweets completed.'));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <NewTweet addNewTweet={this.addNewTweet} />
          <AllTweets tweets={this.state.tweets} />
        </main>
      </div>
    );
  }
}

export default App;
