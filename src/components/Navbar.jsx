import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const [fade, setFade] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Nav link show/hide with toggle onclick
  let navClass = navShow ? "navLinks showNav" : "navLinks";

  // Head Nav bar background color fade In/out when scroll
  let headNavClass = fade ? "headNav fadeIn" : "headNav";

  // Create onScroll function to check the scrollY
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY !== 0 && window.scrollY > 30) {
        console.log("fadein");
        setFade(true);
      } else {
        setFade(false);
        console.log("fadeout");
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  // Event listener call function when scroll, depend on lastScrollY
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  ////////////////////////
  /// Help ** NOT ** scroll all the way to the top
  /// when using react-router-hash-link
  /////////////////////////
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className={headNavClass} id="headNav">
      <div className="wrapper">
        <div className="logoContainer">
          <Link to="#home" className="link" smooth>
            <h1 className="myNameLogo">Joshua Cheung</h1>
          </Link>
        </div>
        <nav>
          <div className="mobileMenu" id="hamburger">
            {navShow ? (
              <FontAwesomeIcon
                className="navToggle"
                icon={faXmark}
                onClick={() => {
                  setNavShow(false);
                }}
              />
            ) : (
              <FontAwesomeIcon
                className="navToggle"
                icon={faBars}
                onClick={() => {
                  setNavShow(true);
                }}
              />
            )}
          </div>
          <ul className={navClass} id="navLinks">
            <li>
              <Link
                to="#about"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
