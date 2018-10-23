import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/splash/Navbar";
import Title from "./components/splash/Title";
import Services from "./components/services/Services";
import Media from "react-media";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="splash">
            <nav>
              <Navbar />
            </nav>
            <div className="outertitle">
              <Title />
            </div>
          </div>
          <div className="services">
            <Services />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
