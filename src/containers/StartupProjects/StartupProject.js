import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="projects-main-div">
          <div className="projects-header">
            <h1 className="heading projects-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode projects-subtitle"
                  : "projects-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          </div>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <Fade 
                  bottom 
                  duration={800} 
                  distance="30px" 
                  key={i}
                  fraction={0.4}
                  delay={i * 100}
                >
                  <div
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                    onClick={() => {
                      if (project.footerLink && project.footerLink.length > 0) {
                        openUrlInNewTab(project.footerLink[0].url);
                      }
                    }}
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : (
                      <div className="project-image">
                        <div className="project-icon">
                          {project.projectName.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="project-detail">
                      <h5
                        className={isDark ? "dark-mode card-title" : "card-title"}
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark ? "dark-mode project-tag" : "project-tag"
                                }
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openUrlInNewTab(link.url);
                                }}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
