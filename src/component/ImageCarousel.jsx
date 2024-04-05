import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const images = [
    "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
    "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
    "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
    "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
    "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second
    autoplay: true,
    autoplaySpeed: 1000, // 1 second
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Remove padding
  };

  return (
    <div id="crs">
      {" "}
      <Slider {...settings} className="">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`I${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
