import React from "react";
import "./Skills.scss";
import { skills } from "../../db/skills.js";
import SkillCard from "./SkillCard";

const { mySkills } = skills;

export default function Skills() {
  return (
    <section className="skills_main" id="skills">
      <div className="wrapper">
        <h4 className="section_h4">About my</h4>
        <h1 className="section_h1">Skills</h1>
        <div className="skillsCard_container">
          <SkillCard skills={mySkills} />
        </div>
      </div>
    </section>
  );
}
