import React, {useContext} from "react";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  
  if (!publicationsSection.display) {
    return null;
  }
  
  return (
    <div className="main" id="publications">
      <div className="publications-main-div">
        <Fade bottom duration={1000} distance="20px">
          <div className="publications-header">
            <h1 className="heading publications-heading">{publicationsSection.title}</h1>
            <p className={isDark ? "dark-mode publications-subtitle" : "publications-subtitle"}>
              {publicationsSection.subtitle}
            </p>
          </div>
        </Fade>

        <div className="publications-cards-div">
          {publicationsSection.publications.map((publication, index) => {
            return (
              <Fade bottom duration={1000} distance="20px" key={index}>
                <PublicationCard publication={publication} index={index} />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
} 