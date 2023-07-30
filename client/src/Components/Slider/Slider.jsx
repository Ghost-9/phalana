import { useState, useEffect } from 'react';
import './Slider.scss';

 const AutoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000);
     return () => clearInterval(interval);
  }, [images]);
   const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };
   const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };
   return (
     <div className="auto-slider">
       <img
         src={images[currentSlide]} alt="Slide" />
             <div className="slider-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
       <div className="slider-button">
         <button onClick={goToPreviousSlide}>Back</button>
         <button onClick={goToNextSlide}>Next</button>
       </div>
    
    </div>
  );
};
export default AutoSlider;
 
