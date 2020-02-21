import React, { Component } from "react";
import '../styles/App.scss';
import Button from "./button/button";

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is empty React project(webpack+sass)</h1>
        <Button />
      </div>
    );
  }
}

export default App;