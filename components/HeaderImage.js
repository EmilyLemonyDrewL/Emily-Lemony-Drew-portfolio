import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <Image
        src="/LemonyBrewHeadIMG.png"
        alt="This is an image of a coffee shop storefront with an OPEN sign in the window. The awning reads, the Portfolio of Emily Lemony Drew."
        width={1300}
        height={372}
        layout="intrinsic" // Use the image's intrinsic width and height
      />
    </div>
  );
}

export default Header;
