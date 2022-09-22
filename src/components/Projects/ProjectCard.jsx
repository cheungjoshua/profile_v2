import React from "react";

export default function ProjectCard(props) {
  return (
    <section className="project_card">
      <h2>{props.name}</h2>
      <div className="project_image_container">
        <img src="../../image/somthingAI.png" alt="" />
      </div>
      <div className="project_describe">
        <h4>Intro :</h4>
        <p>{props.describe}</p>
        <div>
          <h4>Stack :</h4>
          <p>{props.stack}</p>
        </div>
      </div>

      <a href={props.link} className="project_link">
        Github
      </a>
    </section>
  );
}
