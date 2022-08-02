import React from "react";
import myPic from "../../image/me_1.jpeg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <h4>Something</h4>
      <h1>About Me</h1>
      <div className="about_container">
        <img src={myPic} alt="" className="about_me_myPic" />

        <p className="intro">
          Full Stack Developer transitioning from hospitality; enjoying the
          creative process of building an idea from the ground up, first with
          food and now with code. I enjoy building products that are clean and
          easy to use, bringing meaning and convenience to a users’ life.
        </p>
      </div>
    </section>
  );
}
