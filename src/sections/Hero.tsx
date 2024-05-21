"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { images } from "@/data/data";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl bg-black bg-opacity-50 p-2 rounded">
        Automatic Slideshow
      </h2>
      <div className="w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

