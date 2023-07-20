import React, { useEffect, useState } from 'react';
import './Spon.css'; // Assuming you have the styles.css file for the slider styles
import Simg1 from "../../../assets/simg1.png"
import Simg2 from "../../../assets/simg2.png"
import Simg3 from "../../../assets/simg3.png"
import Simg4 from "../../../assets/simg4.png"
import Simg5 from "../../../assets/simg5.png"
import Simg6 from "../../../assets/simg6.png"

const images = [
  Simg1,
  Simg2,
  Simg3,
  Simg4,
  Simg5,
  Simg6,
];

const Spon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change the duration (in milliseconds) for slide change speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sslider-containers">
      <div
        className="sslider-tracks"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 1s ease', // Change the transition duration for smooth animation
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="sslider-items">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spon;
