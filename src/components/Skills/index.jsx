import React from "react";
import "./Skills.scss";
import { skills } from "../../db/skills.js";
import SkillCard from "./SkillCard";

const { frontSkills, backSkills } = skills;

export default function Skills() {
  return (
    <section className="skills_main" id="skills">
      <h4>About my</h4>
      <h1>Skills</h1>
      <div className="skillsCard_container">
        <SkillCard title={"Frontend Development"} skills={frontSkills} />
        <SkillCard title={"Backend Development"} skills={backSkills} />
      </div>
    </section>
  );
}
