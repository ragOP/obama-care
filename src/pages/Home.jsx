import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";
import ImageCarousel from "../component/ImageCarousel";
import Boxes from "../component/Boxes";

const Home = () => {
  const boxesData = [
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in varius lectus. Nullam quis tortor quis nisi fermentum posuere. Donec id est sed justo efficitur scelerisque. Cras auctor aliquet justo, et faucibus velit volutpat sit amet.",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in varius lectus. Nullam quis tortor quis nisi fermentum posuere. Donec id est sed justo efficitur scelerisque. Cras auctor aliquet justo, et faucibus velit volutpat sit amet.",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in varius lectus. Nullam quis tortor quis nisi fermentum posuere. Donec id est sed justo efficitur scelerisque. Cras auctor aliquet justo, et faucibus velit volutpat sit amet.",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in varius lectus. Nullam quis tortor quis nisi fermentum posuere. Donec id est sed justo efficitur scelerisque. Cras auctor aliquet justo, et faucibus velit volutpat sit amet.",
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <ImageCarousel />
      <div className="bx">
        {boxesData.map((box, index) => (
          <Boxes
            key={index}
            imageUrl={box.imageUrl}
            description={box.description}
          />
        ))}
      </div>
      <Hero />
      <Main />
      <Footer />
      <PostFooter />
    </div>
  );
};

export default Home;
