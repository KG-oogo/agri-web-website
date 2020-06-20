import React from "react";
import logo from "../logo.jpg";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useSpring, animated, config } from "react-spring";

export default function OApp(props) {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Produce Market</Link>
            </li>
            <li>
              <Link to="/Information">Information</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Information">
            <Information />
          </Route>
          <Route path="/">
            <ProduceMarket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ProduceMarket() {
  const [aniProps, set, stop] = useSpring(() => ({
    opacity: 0,
  }));

  // Update spring with new props
  set({ opacity: 1, config: config.molasses });
  // Stop animation
  stop();
  return (
    <header className="App-header">
      <animated.img
        style={aniProps}
        src={logo}
        className="App-logo"
        alt="logo"
        width="20%"
        height="100%"
      />
    </header>
  );
}

function About() {
  return <h2>About</h2>;
}

function Information() {
  return <h2>Information</h2>;
}
