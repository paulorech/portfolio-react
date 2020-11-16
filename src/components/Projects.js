import React, { Component } from "react";
import projectData from '../data/projectData';
import {Link} from 'react-router-dom';

class Projects extends Component {
  
    
  render() {
    return projectData.map((project) => (
      <div className="cell" key={project.id}>
        <Link to={project.id}>
          <img
            className="thumbnail" 
            src={project.image_urls[0]}
            alt={project.project_name}
          />
          <h5>{project.project_name}</h5>
        </Link>
      </div>
    ));
  }
}

export default Projects;