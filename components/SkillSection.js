import React from 'react';
import Image from 'next/image';

function Skills() {
  const skills = [
    { name: 'SQL', logo: '/logos/logosql.png' },
    { name: 'Python', logo: '/logos/logopython.png' },
    { name: 'Django', logo: '/logos/logodjango.png' },
    { name: 'JavaScript', logo: '/logos/logojavascript.png' },
    { name: 'HTML & CSS', logo: '/logos/logohtml.png' },
    { name: 'Firebase', logo: '/logos/logofirebase.png' },
    { name: 'Postman', logo: '/logos/logofirebase2.png' },
  ];

  return (
    <div className="skills-container skill-set">
      <div className="skill-section">
        <h2>Skills</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-thing">
              <Image
                src={skill.logo}
                alt={`${skill.name} logo`}
                width={20}
                height={20}
                className="skill-logo"
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
