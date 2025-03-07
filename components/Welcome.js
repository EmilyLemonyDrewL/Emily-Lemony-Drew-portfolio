import React from 'react';
import Image from 'next/image';

function Welcome() {
  return (
    <div>
      <Image
        className="welcome-img"
        src="/LemonyBrewWelcome.png"
        alt="Sparkling welcome sign"
        width={1400}
        height={210}
        layout="intrinsic" // Use the image's intrinsic width and height
      />
    </div>
  );
}

export default Welcome;
