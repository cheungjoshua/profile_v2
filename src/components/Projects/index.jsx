import React from "react";
import "./Projects.scss";
import { projects } from "../../db/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = projects.map((item) => {
    return (
      <ProjectCard
        id={item.id}
        image={item.image}
        link={item.link}
        describe={item.describe}
      />
    );
  });

  return (
    <section className="projects_main" id="projects">
      <h4>My recent</h4>
      <h1>Projects</h1>
      <div className="projects_container">{projectList}</div>
    </section>
  );
}
