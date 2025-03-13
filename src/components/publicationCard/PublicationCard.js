import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({publication, index}) {
  return (
    <div className={`publication-card publication-card-${index}`}>
      <div className="publication-card-title">
        <h3 className="publication-title">{publication.title}</h3>
      </div>
      <div className="publication-card-body">
        <p className="publication-authors">{publication.authors}</p>
        <p className="publication-venue">
          <span className="publication-venue-name">{publication.venue}</span>
          {publication.year && (
            <span className="publication-year"> ({publication.year})</span>
          )}
        </p>
        <p className="publication-abstract">{publication.abstract}</p>
        <div className="publication-card-footer">
          {publication.links.map((link, i) => {
            return (
              <a
                key={i}
                className="publication-btn"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
