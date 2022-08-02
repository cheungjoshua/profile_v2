import React from "react";

export default function ProjectCard(props) {
  return (
    <section className="project_card">
      <div className="project_image_container">
        <img src={props.image} alt="" />
      </div>
      <div className="project_describe">
        <p>{props.describe}</p>
      </div>

      <a href={props.link} className="project_link">
        Github
      </a>
    </section>
  );
}
