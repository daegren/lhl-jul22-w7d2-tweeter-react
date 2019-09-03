import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <form>
      <textarea
        name="text"
        placeholder="What are you humming about?"
      ></textarea>
      <input type="submit" value="Tweet" />
      <span className="counter">140</span>
    </form>
  );
};

export default Form;
