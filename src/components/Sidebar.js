import React, { Component } from 'react';
import ProfilePic from '../profile.png';
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
        <div className="off-canvas position-left reveal-for-large portfolio-me" id="my-info" data-off-canvas>
          <div className="grid-y grid-padding-x" style={{ height: '100%' }}>
            <br />
            <div className="cell shrink">
              <img className="thumbnail" src={ProfilePic} alt="profile Pic" />
            </div>
            <div className="cell auto">
              <h5>Paulo Gustavo Rech</h5>
              <p className="text-light">Software Development Student | Seeking Software Engineering opportunities | Java, PHP, JavaScript, React, Node | 2020 Graduation | Avid tennis player.</p>
              <Link to="/about">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
    );
  }
}


export default Sidebar;