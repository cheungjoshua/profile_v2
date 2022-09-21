import React from "react";

export default function SkillCard({ skills }) {
  const skillsList = skills.map((skill) => {
    const iconName = `devicon-${skill}`;
    const skillName = skill.split("-")[0];
    return (
      <li className="skill_icon">
        <i className={iconName}></i>
        {skillName}
      </li>
    );
  });

  return (
    <section className="skills_listContainer">
      <ul>{skillsList}</ul>
    </section>
  );
}
