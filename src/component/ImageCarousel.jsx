import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from "../assests/logo2.jpeg";
import logo3 from "../assests/logo3.jpeg";
import logo4 from "../assests/logo4.jpeg";
import logo5 from "../assests/logo5.jpeg";
import logo6 from "../assests/logo6.jpeg";
import logo7 from "../assests/log7.jpeg";

const ImageCarousel = () => {
  const images = [logo2, logo3, logo4, logo5, logo6, logo7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // 1 second
    autoplay: true,
    autoplaySpeed: 8000, // 1 second
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
