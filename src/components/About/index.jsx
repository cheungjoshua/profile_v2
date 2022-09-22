import React from "react";
import myPic from "../../image/me_1.jpeg";
import "./About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <h4 className="section_h4">Something</h4>
        <h1 className="section_h1">About Me</h1>
        <div className="about_container">
          <div className="about_imageContainer">
            <img src={myPic} alt="" className="about_me_myPic" />
          </div>
          <div className="about_introContainer">
            <p className="intro">
              Full Stack Developer transitioning from hospitality; enjoying the
              creative process of building an idea from the ground up, first
              with food and now with code. I enjoy building products that are
              clean and easy to use, bringing meaning and convenience to a
              users’ life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
