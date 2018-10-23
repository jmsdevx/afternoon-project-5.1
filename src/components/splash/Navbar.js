import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <button>Start Bootstrap</button>
        <div id="innernav">
          <button>Services</button>
          <button>Portfolio</button>
          <button>About</button>
          <button>Team</button>
          <button>Contact</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
