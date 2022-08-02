import React from "react";

export default function SkillCard({ title, skills }) {
  const skillsList = skills.map((skill) => {
    return <li>{skill}</li>;
  });

  return (
    <section className="skill_card">
      <header>
        <h4>{title}</h4>
      </header>
      <main>
        <ul>{skillsList}</ul>
      </main>
    </section>
  );
}
