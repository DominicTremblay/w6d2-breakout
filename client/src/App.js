import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import NewTweet from './newtweet';
import AllTweets from './AllTweets';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <NewTweet />
          <AllTweets />
        </main>
      </div>
    );
  }
}

export default App;
