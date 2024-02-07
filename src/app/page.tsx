"use client";
import Gallery from "@/components/Home/caraousel/gallery/Gallery";
import React from "react";

import image1 from "../assets/images/gallery-image1.png";
import image2 from "../assets/images/gallery-image2.jpg";
import image3 from "../assets/images/gallery-image3.png";
import image4 from "../assets/images/gallery-image4.png";
import { Center } from "@/Temp/Components";

const dummyImages = [image1, image2, image3, image4, image1];

const App: React.FC = () => {
  return (
    <Center>
      <Gallery images={dummyImages} />
    </Center>
  );
};

export default App;
