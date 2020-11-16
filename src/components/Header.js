import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <article className="grid-container portfolio-intro">
        <div className="">
          <h1>Paulo Gustavo Rech Portfolio</h1>
          <p className="lead text-light">
            This portfolio shows projects that I finished as a student at
            Douglas College. Technologies used: Javascript, jQuery, Node, Pug,
            Express and React.
          </p>
        </div>
      </article>
    );
  }
}

export default Header;
