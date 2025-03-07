import React from 'react';
import Image from 'next/image';

function Download() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '140px',
    }}
    >
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lemonywebdev@gmail.com&su=via:Portfolio%20Hello!&body=Hi%20Emily,">
        <Image
          src="/LemonyBrewemail.png"
          alt="Email Me"
          width={210}
          height={100}
          layout="intrinsic"
        />
      </a>

      <a href="/EmilyDrewL-Resume.pdf" download="Lemony_Drew_Resume.pdf">
        <Image
          src="/LemonyBrewdownload.png"
          alt="Download My Resume"
          width={340}
          height={100}
          layout="intrinsic"
        />
      </a>

    </div>
  );
}

export default Download;
