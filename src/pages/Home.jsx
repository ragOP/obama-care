import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";
import ImageCarousel from "../component/ImageCarousel";
import Boxes from "../component/Boxes";
import { Link } from "react-router-dom";

const Home = () => {
  const boxesData = [
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description:
        "What are the main differences between Medicare and Medicaid? (Detailed)",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl:
        "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <ImageCarousel />
      <div className="bx">
        {boxesData.map((box, index) => (
          <Link key={index} to="/blog" className="link">
            <Boxes imageUrl={box.imageUrl} description={box.description} />
          </Link>
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
