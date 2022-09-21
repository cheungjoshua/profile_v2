import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import myPic from "../../image/me_2.jpg";
import Resume from "../../files/joshua_cheung_resume.pdf";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home_main" id="home">
      <div className="wrapper">
        <h4 className="title_sub">Hello, I'm</h4>
        <h1 className="title_main">Joshua Cheung</h1>
        <h4 className="title_sub">Full-Stack Developer</h4>
        <div className="imageContainer">
          <img src={myPic} alt="" className="myPic" />
        </div>
        <div className="button_list">
          <a href={Resume} download className="btn solid link">
            resume
          </a>
          <Link to="#footer" className="btn line link" smooth>
            contact
          </Link>
        </div>
      </div>
    </section>
  );
}
