import React, { Component } from "react";
import "./App.css";
import NavBar from "./navbar";
import NewTweet from "./newtweet";
import AllTweets from "./AllTweets";

class App extends Component {
  state = { tweets: [] };

  componentDidMount() {
    fetch("/tweets")
      .then(res => res.json())
      .then(tweets => this.setState({ tweets }));
  }

  postTweet = content => {
    fetch("http://localhost:8080/tweets", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ text: content })
    })
      .then(response => response.json())
      .then(tweet => {
        this.setState({ tweets: [tweet, ...this.state.tweets] });
      })
      .catch(error => console.error(`Fetch Error =\n`, error));
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <NewTweet postTweet={this.postTweet} />
          <AllTweets tweets={this.state.tweets} />
        </main>
      </div>
    );
  }
}

export default App;
