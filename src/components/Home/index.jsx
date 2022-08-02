import React from "react";
import myPic from "../../image/me_2.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home_main">
      <h4 className="title_sub">Hello, I'm</h4>
      <h1 className="title_main">Joshua Cheung</h1>
      <h4 className="title_sub">Full-Stack Developer</h4>
      <div>
        <img src={myPic} alt="" className="myPic" />
      </div>
      <div className="button_list">
        <button className="btn line">Download CV</button>
        <button className="btn solid">Contact me</button>
      </div>
    </section>
  );
}
