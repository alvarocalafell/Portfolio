import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container">
            <div className="experience-header">
              <h1 className="experience-heading">Experiences</h1>
              <p className={isDark ? "dark-mode experience-subtitle" : "experience-subtitle"}>
                {workExperiences.subtitle || "My professional journey"}
              </p>
            </div>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <Fade 
                    bottom 
                    duration={800} 
                    distance="30px" 
                    key={i}
                    fraction={0.4}
                    delay={i * 100}
                  >
                    <div className="fade-in">
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          companyUrl: card.companyUrl
                        }}
                      />
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
