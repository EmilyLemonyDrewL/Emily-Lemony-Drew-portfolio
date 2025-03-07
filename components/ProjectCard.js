import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, links }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="button-container">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

export default ProjectCard;
