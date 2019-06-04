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
    // Back end is sending back the full tweet object
    // Update the state with the new tweet object
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
          <NewTweet />
          <AllTweets tweets={this.state.tweets} />
        </main>
      </div>
    );
  }
}

export default App;
