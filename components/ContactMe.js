import React from 'react';
import Image from 'next/image';

function ContactMe() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px',
    }}
    >
      <a href="https://www.instagram.com/lemonywebdev/?hl=en" target="_blank" rel="noopener noreferrer">
        <Image
          src="/LemonyBrewInsta.png"
          alt="Link to Instagram"
          width={240} // Adjust width to fit three images in a row
          height={100}
          layout="intrinsic"
        />
      </a>

      <a href="https://www.linkedin.com/in/lemony-web-dev" target="_blank" rel="noopener noreferrer">
        <Image
          src="/LemonyBrewLinkedIn.png" // Replace with your actual image path
          alt="Link to LinkedIn"
          width={240}
          height={100}
          layout="intrinsic"
        />
      </a>

      <a href="https://github.com/EmilyLemonyDrewL" target="_blank" rel="noopener noreferrer">
        <Image
          src="/LemonyBrewGitHub.png" // Replace with your actual image path
          alt="Link to GitHub"
          width={240}
          height={100}
          layout="intrinsic"
        />
      </a>

    </div>
  );
}

export default ContactMe;
