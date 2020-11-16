import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/foundation.css";
import "../css/style.css";


class About extends Component {

  render() {
    return (
      <div>
        <Sidebar />
        <div className="off-canvas-content" data-off-canvas-content="">
      <div class="title-bar hide-for-large">
        <div className="title-bar-left">
          <button className="menu-icon" type="button" data-toggle="my-info"></button><span className="title-bar-title"></span>
        </div>
      </div>
      <nav className="grid-container portfolio-breadcrumb"><Link to="/">← Back</Link></nav>
      <article className="grid-container portfolio-intro portfolio-project">
        <div className="grid-x">
          <div className="cell small-6 medium-9 large-9">
            <h1>Paulo Gustavo Rech</h1>
            <p className="lead text-light">During the past 2 years, I've spent an incredible amount of time learning and practicing computer programming, 
              algorithms and data structures, problem-solving and building and launching applications.</p>
            <div className="portfolio-bio">
              
                Burnaby based Full Stack Developer, Mobile App and Web Developer, Software Developer with a Post Baccalaureate 
                  Degree in Computer and Information System. I have found much enjoyment and excitement from coding with JavaScript, 
                  React, and PHP and my dream is to create mobile or web applications that will improve people's lives.
              <br/><br/>
                I work well in fast-paced environments and I am a quick and adaptable learner. I strongly believe in lifetime learning 
                  and during my career, I am constantly learning about new technologies and how to write better code.
              <br/><br/>
                 - Expertise in using IDE tools such as Eclipse, Visual Studio, Visual Studio Code and Android Studio.<br/>
                 - Involved in writing application level code to interact with APIs, RESTful Web Services using AJAX, JSON.<br/>
                 - Experience in developing web pages using HTML, XML, CSS, JavaScript, React JS, jQuery, JSON, Node.js, Ajax, jQUERY, Bootstrap.<br/>
                 - Experience in using React JS components, Forms, Events, Keys, Router.<br/>
                 - Experience in Node environment using Node.js, NPM, Express.<br/>
                 - Experience in Android Development with Java and Kotlin.<br/>
            </div>
          </div>
          <div className="cell portfolio-meta small-6 medium-2 large-3">
            <h6>Skills</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Express</li>
              <li>Pug</li>
            </ul>
            <h6>Contact Info</h6>
            <a className="button expanded" href="https://www.linkedin.com/in/paulogustavorech/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button expanded" href="https://github.com/paulorech" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </article>
      <nav className="grid-container portfolio-breadcrumb"><Link to="/">← Back</Link></nav>
    </div>
        </div>

  
    );
  }
}

export default About;