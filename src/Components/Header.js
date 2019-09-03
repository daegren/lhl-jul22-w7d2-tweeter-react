import React from "react";

import "./Header.css";
import profile from "../profile-hex.png";

const Header = () => {
  return (
    <header className="page--header">
      <div>
        <img src={profile} alt="avatar" />
      </div>
      <br />
      <div>
        <h2>David Mills</h2>
      </div>
    </header>
  );
};

export default Header;
