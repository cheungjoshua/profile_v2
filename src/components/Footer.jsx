import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <section className="footer">
      <h4>Thank you for visiting</h4>
      <ul>
        <li>
          <Link to="#home" className="link" smooth>
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" className="link" smooth>
            About
          </Link>
        </li>
        <li>
          <Link to="#skills" className="link" smooth>
            Skills
          </Link>
        </li>
        <li>
          <Link to="#projects" className="link" smooth>
            Projects
          </Link>
        </li>
      </ul>
    </section>
  );
}
