import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "", user: "", pass: "" };
  }

  handleUser = (event) => {
    this.setState({ user: event.target.value });
  };
  handleMsg = (event) => {
    this.setState({ msg: event.target.value });
  };
  handlePass = (event) => {
    this.setState({ pass: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        class="container"
      >
        <img
          src={require("./assets/insta.jpg")}
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
        <div style={{ margin: 10 }} class="row">
          <div class="col">
            <h4>User name</h4>
          </div>
          <div class="col">
            <input
              type="text"
              value={this.state.user}
              onChange={this.handleUser}
            />
          </div>
        </div>
        <div style={{ margin: 10 }} class="row">
          <div class="col">
            <h4>Password</h4>
          </div>
          <div class="col">
            <input
              type="password"
              value={this.state.pass}
              onChange={this.handlePass}
            />
          </div>
        </div>
        <div style={{ margin: 10 }} class="row">
          <div class="col">
            <h4>Your Message</h4>
          </div>
          <div class="col">
            <input
              type="text"
              value={this.state.msg}
              onChange={this.handleMsg}
            />
          </div>
        </div>
        <div style={{ margin: 30 }} class="row" style={{ alignSelf: "center" }}>
          <button
            onClick={() => {}}
            style={{
              alignSelf: "center",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              paddingRight: 30,
              paddingLeft: 30
            }}
            type="button"
            class="btn-lg btn-danger"
          >
            <h3>Send </h3>
          </button>
        </div>
      </div>
    );
  }
}
export default Main;
