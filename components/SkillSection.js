import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div>
      <Image
        className="skill-img"
        src="/LemonyBrewSkills.png"
        alt="This section lists skills and certificates. Under skill it reads, react, pyhton, django, SQL, Git, GitHub, Firebase, JavaScript, HTML and CSS. Under certificates it reads Software Developer Certificate from Nashville Software School and API Fundamentals Student Expert Certificate from Postman."
        width={1180}
        height={290}
        layout="intrinsic" // Use the image's intrinsic width and height
      />
    </div>
  );
}

export default Skills;
