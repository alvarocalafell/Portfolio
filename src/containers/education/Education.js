import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);

  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="main" id="education">
      <div className="education-section">
        <Fade bottom duration={1000} distance="20px">
          <div className="education-header">
            <h1 className="education-heading">Education</h1>
            {educationInfo.subtitle && (
              <p
                className={
                  isDark ? "dark-mode education-subtitle" : "education-subtitle"
                }
              >
                {educationInfo.subtitle}
              </p>
            )}
          </div>
        </Fade>

        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
