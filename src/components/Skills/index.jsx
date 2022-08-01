import React from "react";
import "./Skills.scss";

const frontSkills = ["HTML", "CSS", "JavaScript", "React"];
const backSkills = ["NodeJS", "Express", "PHP", "MySQL", "PostgreSQL"];

export default function Skills() {
  return (
    <section>
      <h4>About my</h4>
      <h1>Skills</h1>
      <div className="container">
        <div className="skills_card">
          <h4>Frontend Development</h4>
          <ul className="skills_list"></ul>
        </div>
        <div className="skills_card">
          <h4>Backend Development</h4>
          <ul className="skills_list"></ul>
        </div>
      </div>
    </section>
  );
}
