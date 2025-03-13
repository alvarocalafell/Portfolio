import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profilePic from "../../assets/images/profile/profile.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="main" id="greeting">
      <div className="greet-main">
        <Fade bottom duration={1000} distance="40px">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1
                  className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                >
                  {greeting.title}
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>
                {greeting.description && (
                  <p
                    className={
                      isDark
                        ? "dark-mode greeting-text-p"
                        : "greeting-text-p"
                    }
                  >
                    {greeting.description}
                  </p>
                )}
                {greeting.callToAction && (
                  <p
                    className={
                      isDark
                        ? "dark-mode greeting-text-p call-to-action"
                        : "greeting-text-p call-to-action"
                    }
                  >
                    {greeting.callToAction}
                  </p>
                )}
                <SocialMedia />
                <div className="button-greeting-div">
                  {greeting.resumeLink && (
                    <a
                      href={greeting.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-link-button"
                    >
                      <Button text="DOWNLOAD MY RESUME" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <img 
                src={profilePic} 
                alt="Alvaro Calafell" 
                className="profile-image"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
