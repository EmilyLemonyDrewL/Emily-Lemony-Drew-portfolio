import React from 'react';
import Image from 'next/image';

function AboutMe() {
  return (
    <div>
      <Image
        className="about-img"
        src="/LemonyBrewAbout.png"
        alt="About Me. On the left is an image of Lemony. On the right, it reads, I am a September 2024 graduate of the part-time Web Development bootcamp at Nashville Software School. My ardor for art and design has been a contant presence throughout my life. In college, I learned to manage camera equipment within the film department. In recent times, I have served as a mock up artist for a compnany that designs paper goods, like gift bags and stationary. I am inherently detail-oriented, finding immense satisfaction is projects that demand precision and an accumulation of effort over time."
        width={1180}
        height={290}
        layout="intrinsic" // Use the image's intrinsic width and height
      />
    </div>
  );
}

export default AboutMe;
