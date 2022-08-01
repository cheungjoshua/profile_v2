import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
      </ul>
    </section>
  );
}
