import React from "react";
import myPic from "../../image/me_2.jpg";
import Resume from "../../files/joshua_cheung_resume.pdf";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home_main" id="home">
      <h4 className="title_sub">Hello, I'm</h4>
      <h1 className="title_main">Joshua Cheung</h1>
      <h4 className="title_sub">Full-Stack Developer</h4>
      <div>
        <img src={myPic} alt="" className="myPic" />
      </div>
      <div className="button_list">
        <a href={Resume} download>
          <button className="btn line">Download CV</button>
        </a>
        <a href="mailto:joshuacycheung@gmail.com">
          <button className="btn solid">Contact me</button>
        </a>
      </div>
    </section>
  );
}
