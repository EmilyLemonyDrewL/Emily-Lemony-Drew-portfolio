import React from 'react';

function Certificates() {
  const certifications = [
    'Nashville Software School Certificate',
    'Postman API Fundamentals Student Expert Certificate',
  ];

  return (
    <div className="skills-container">
      <div className="skill-section">
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
