import React from 'react';
import PropTypes from 'prop-types';

const projects = [
  {
    title: 'Hubert Herps',
    description: 'Hubert Herps is a Front End project using React',
    links: [
      { label: 'FE code', url: 'https://github.com/example/hubert-herps' },
      { label: 'Deployed', url: 'https://hubert-herps.netlify.app' },
    ],
  },
  {
    title: 'Another Project',
    description: 'Only has one link',
    links: [
      { label: 'FE code', url: 'https://github.com/example/another' },
      { label: 'BE code', url: 'http://github.com' },
    ],
  },
  {
    title: 'Cool App',
    description: 'React + Django + Postgres',
    links: [
      { label: 'GitHub', url: 'https://github.com/example/cool-app' },
    ],
  },
  {
    title: 'Extra Project',
    description: 'Just to test the scroll',
    links: [
      { label: 'Repo', url: 'https://github.com/example/extra' },
    ],
  },
];

const ProjectCard = ({ title, description, links }) => (
  <div className="card project-card h-20">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <div className="row">
        {links.map((link) => (
          <a
            key={link}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>

);

const Projects = () => (
  <div className="container py-4">
    <div className="row g-4">
      {projects.map((project) => (
        <div className="col-3 mb-2" key={project}>
          <ProjectCard
            title={project.title}
            description={project.description}
            links={project.links}
          />
        </div>
      ))}
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Projects;
