import React from "react";

import "./Tweet.css";
import DateDisplay from "./DateDisplay";

const Tweet = ({ user, content, created_at }) => {
  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src={user.avatars} />
        <h2 className="tweet--name">{user.name}</h2>
        <small className="tweet--handle">{user.handle}</small>
      </header>
      <div className="tweet--body">
        <p>{content.text}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">
          <DateDisplay date={created_at} />
        </small>
        <span className="footer--actions">
          <a href="#">
            <i className="fa fa-flag"></i>
          </a>
          <a href="#">
            <i className="fa fa-retweet"></i>
          </a>
          <a href="#">
            <i className="fa fa-heart"></i>
          </a>
        </span>
      </footer>
    </article>
  );
};

export default Tweet;
