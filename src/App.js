import "./App.css";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Intro from "./components/Intro.jsx";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.prev = window.pageYOffset;
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let cur = window.pageYOffset;
      if (cur > this.prev && !this.state.hidden) {
        this.setState({ hidden: true });
      } else if (cur <= this.prev && this.state.hidden) {
        this.setState({ hidden: false });
      }
      this.prev = cur;
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar hidden={this.state.hidden} />
        <Intro />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    );
  }
}

export default App;
