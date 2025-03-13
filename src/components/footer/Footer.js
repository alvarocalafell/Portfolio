import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {socialMediaLinks} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "dark-mode footer-div" : "footer-div"}>
        <div className="footer-links">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {socialMediaLinks.gmail && (
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          )}
        </div>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2024 Alvaro Calafell. All rights reserved.")}
        </p>
      </div>
    </Fade>
  );
}
