import React, {createRef, useContext} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => {
          // Add bold formatting to text within ** markers
          const formattedItem = item.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
          );

          return (
            <li
              key={i}
              className={isDark ? "dark-mode" : ""}
              dangerouslySetInnerHTML={{__html: formattedItem}}
            />
          );
        })
      : null;
  };

  if (!school.logo)
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "education-card dark-mode" : "education-card"}>
        <div className="education-card-header">
          {school.logo && (
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          )}
          <div className="education-header-text">
            <h3 className="education-text-school">{school.schoolName}</h3>
            <h4 className="education-text-subHeader">{school.subHeader}</h4>
          </div>
        </div>

        <span className="education-text-duration">{school.duration}</span>

        {school.desc && <p className="education-text-desc">{school.desc}</p>}

        <div className="education-text-bullets">
          <ul>
            <GetDescBullets descBullets={school.descBullets} />
          </ul>
        </div>
      </div>
    </Fade>
  );
}
