import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from '../data/projectData';
import projectDataMap from '../data/projectDataMap';
import Sidebar from "./Sidebar";
import Error from "./Error";

class ProjectDetails extends Component {

  renderProject(project) {
    if (project == null || !Array.isArray(project.technologies) || !Array.isArray(project.image_urls)) {
      return <Error/>
    }

    return <article class="grid-container portfolio-intro portfolio-project">
      <div className="grid-x">
        <div className="cell small-6 medium-9 large-9">
          <div className="project-list" key={project.id}>
            <div class="grid-x">
              <div class="cell small-6 medium-9 large-9">
                <h1>{project.project_name}</h1>
                <p class="lead text-light">{project.description}</p>
              </div>
              <div class="cell portfolio-meta small-6 medium-2 large-3">
                <h6>Technologies</h6>
                <ul>
                  {project.technologies.map((technology) => {
                    return <li>{technology}</li>;
                  })}
                </ul>
                <a class="button expanded" href={project.live_link}>
                  Live Demo
                        </a>
                <a class="button expanded" href={project.github_link}>
                  GitHub Repo
                        </a>
              </div>
            </div>
            {project.image_urls.map((image) => {
              return (
                <img className="image" src={image} alt="project_image" />
              );
            })}
          </div>
        </div>
      </div>
    </article>
  }

  render() {

    let projectObject = this.props.match.params.id;
    // const project = projectData.find(project => project.id == projectObject);
    const project = projectDataMap[projectObject];
    return (
      <div>
        <Sidebar />
        <div className="off-canvas-content" data-off-canvas-content>
          <div className="title-bar hide-for-large">
            <div className="title-bar-left">
              <button
                className="menu-icon"
                type="button"
                data-toggle="my-info"
              ></button>
              <span className="title-bar-title">Paulo Gustavo Rech{projectObject}</span>
            </div>
          </div>



          <nav className="grid-container portfolio-breadcrumb">
            <Link to="/">&larr; Back </Link>
          </nav>
          {
            this.renderProject(project)
          }
        </div>
      </div>
    );
  }
}
export default ProjectDetails;