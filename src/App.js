import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Header />
        <main>
          <section class="new-tweet">
            <h2>Compose Tweet</h2>
            <Form />
          </section>
          <p>asdfasdfasdfasdf</p>
          <p>asdfasdfasdfasdf</p>
          <p>asdfasdfasdfasdf</p>
          <p>asdfasdfasdfasdf</p>
          <p>asdfasdfasdfasdf</p>
          <p>asdfasdfasdfasdf</p>
        </main>
      </div>
    </div>
  );
}

export default App;
