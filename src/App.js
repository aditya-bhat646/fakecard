import React, { Component } from "react";
import Widget from "./Component/Widget/Widget";
import InputForm from "./Component/InputForm/InputForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardNo: "",
      username: "",
      expiry: "",
    };
    console.clear();
  }

  userChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    const { cardNo, username, expiry } = this.state;
    return (
      <div className="app">
        <div className="fakeCard__header">
          <h1>Credit Card Input Widget</h1>
          <Widget
            cardNo={cardNo}
            username={username}
            expiry={expiry}
          />
        </div>
        <div className="fakeCard__content">
          <InputForm userSubmit={this.userChange} />
        </div>
      </div>
    );
  }
}
export default App;
