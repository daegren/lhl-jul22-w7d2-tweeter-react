import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  const [tweets, setTweets] = useState([]);
  // If this value is toggled, it will refetch data from the API
  const [reload, setReload] = useState(false);

  // This effect is dependent on the `reload` state value,
  // if it changes the effect will be re-run
  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then(resp => resp.json())
      .then(tweets => {
        setTweets(tweets);
      });
  }, [reload]);

  // Handles posting the tweet to the backend
  // Passed from this component -> Main -> Form
  const submitTweet = content => {
    fetch("http://localhost:3000/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `text=${encodeURIComponent(content)}`
    }).then(resp => {
      if (resp.status >= 200 && resp.status < 300) {
        setReload(!reload);
      }
    });
  };

  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Header />
        <Main tweets={tweets} submitTweet={submitTweet} />
      </div>
    </div>
  );
};

export default App;
