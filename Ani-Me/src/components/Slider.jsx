import { useState, useEffect } from "react";
import "./slider.css"; 

const banners = [
  "/images/aot.jpg",
  "/images/bleach.jpg",
  "/images/dbz.jpg",
  "/images/kakegurui.jpg",
  "/images/mha.jpg",
  "/images/onepiece.jpg",
  "/images/prc.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={banners[currentIndex]} alt="Anime Banner" className="slide-img" />
      <button className="watch-now">Watch Now</button>
    </div>
  );
};

export default Slider;
