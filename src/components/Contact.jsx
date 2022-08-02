import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="contact">
      <ul>
        <li>
          <a
            href="mailto:joshuacycheung@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-cy-cheung/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cheungjoshua"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </section>
  );
}
