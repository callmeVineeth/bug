import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  images: StaticImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const newPosition = (scrollPosition + 1) % (images.length * 100);
  //       setScrollPosition(newPosition);
  //     };

  //     const interval = setInterval(handleScroll, 50);

  //     return () => clearInterval(interval);
  //   }, [scrollPosition, images.length]);

  return (
    <div className={styles.container}>
      <div
        className={styles.gallery}
        style={{ transform: `translateX(-${scrollPosition}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles[`column-${(index % 4) + 1}`]}>
            <Image
              src={image}
              alt={`Image ${index}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
