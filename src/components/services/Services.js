import React, { Component } from "react";
import cart from "./cart.PNG";
import comp from "./comp.PNG";
import lock from "./lock.PNG";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="servicetitle">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="servicebox">
          <div className="servicecontent">
            <img src={cart} alt="cart" />
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="servicecontent">
            <img src={comp} alt="laptop" />
            <h3>Responsive Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="servicecontent">
            <img src={lock} alt="lock" />
            <h3>Web Security</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
