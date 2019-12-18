import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { altNavLinks: false, windowWidth: null };
  }
  showNavLinks = () => {
    return this.state.altNavLinks
      ? this.setState({ altNavLinks: false })
      : this.setState({ altNavLinks: true });
  };

  renderNavLinks = () => {
    if (this.state.altNavLinks) {
      return (
        <div className="app-links-alt">
          <a href="#">Home</a>
          <a href="#">Budget!</a>
          <a href="#">History</a>
        </div>
      );
    }
  };

  renderNavIcon = () => {
    if (!this.state.altNavLinks) {
      return (
        <i
          className="app-nav-alt-hamburger align justify icon"
          onClick={this.showNavLinks}
        ></i>
      );
    } else {
      return (
        <i
          className="app-nav-alt-hamburger close icon"
          onClick={this.showNavLinks}
        ></i>
      );
    }
  };

  listenToResize = () => {
    return this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
    window.addEventListener("resize", this.listenToResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.listenToResize);
  }

  render() {
    if (this.state.windowWidth > 600) {
      return (
        <div>
          <nav className="app-nav">
            <div className="app-title">Budget Buddy</div>
            <div className="app-links">
              <a href="#">Home</a>
              <a href="#">Budget!</a>
              <a href="#">History</a>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="app-nav-alt">
            {this.renderNavIcon()}
            <div
              className={
                "app-title-alt " +
                (this.state.altNavLinks
                  ? "app-nav-title-alt--hide"
                  : "app-nav-title-alt--show")
              }
            >
              Budget Buddy
            </div>
            {this.renderNavLinks()}
          </nav>
        </div>
      );
    }
  }
}

export default Navigation;
