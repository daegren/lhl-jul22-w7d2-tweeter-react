import React from "react";
import Form from "./Form";
import Tweet from "./Tweet";

const Main = ({ tweets, submitTweet }) => {
  return (
    <main>
      <section className="new-tweet">
        <h2>Compose Tweet</h2>
        <Form submitTweet={submitTweet} />
      </section>
      <section className="tweets">
        {tweets.map(t => (
          <Tweet key={t.created_at} {...t} />
        ))}
      </section>
    </main>
  );
};

export default Main;
