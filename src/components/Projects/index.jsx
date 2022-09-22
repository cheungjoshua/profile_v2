import React from "react";
import "./Projects.scss";
import { projects } from "../../db/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = projects.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        link={item.link}
        describe={item.describe}
        location={item.location}
        stack={item.stack}
      />
    );
  });

  return (
    <section className="projects_main" id="projects">
      <div className="wrapper">
        <h4 className="section_h4">My recent</h4>
        <h1 className="section_h1">Projects</h1>
        <div className="projects_container">{projectList}</div>
      </div>
    </section>
  );
}
