import React, { useState, useEffect } from "react";

import "./Form.css";

const Form = ({ submitTweet }) => {
  const [content, setContent] = useState("");
  const [counter, setCounter] = useState(140);

  // Uses an effect to keep the `counter` variable in sync with the value of `content`
  // Useful since we update the `content` from many different places
  useEffect(() => {
    setCounter(140 - content.length);
  }, [content.length]);

  // Submit event handler for the form
  const onSubmitHandler = e => {
    e.preventDefault();

    if (content) {
      submitTweet(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <textarea
        name="text"
        placeholder="What are you humming about?"
        value={content}
        onChange={e => setContent(e.target.value)}
      ></textarea>
      <input type="submit" value="Tweet" />
      <span className="counter">{counter}</span>
    </form>
  );
};

export default Form;
