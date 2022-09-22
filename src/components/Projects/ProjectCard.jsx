import React from "react";

export default function ProjectCard(props) {
  return (
    <section className="project_card">
      <div className="project_image_container">
        <img src={props.image} alt="" />
      </div>

      <div className="project_describe">
        <h2 className="project-title">{props.name}</h2>
        <div>
          <h4 className="project_describe-title">About :</h4>
          <p>{props.describe}</p>
        </div>

        <div>
          <h4 className="project_describe-title">Stack :</h4>
          <p>{props.stack}</p>
        </div>
        <a href={props.link} className="project_link btn solid">
          VIEW {props.location}
        </a>
      </div>
    </section>
  );
}
