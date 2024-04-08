import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";
import ImageCarousel from "../component/ImageCarousel";
import Boxes from "../component/Boxes";
import { Link } from "react-router-dom";
import logo2 from "../assests/logo2.jpeg";
import logo3 from "../assests/logo3.jpeg";
import logo4 from "../assests/logo4.jpeg";
import logo5 from "../assests/logo5.jpeg";
import logo6 from "../assests/logo6.jpeg";
import logo7 from "../assests/log7.jpeg";

const Home = () => {
  const boxesData = [
    // {
    //   imageUrl:
    //     "https://obama-care.vercel.app/static/media/462028.0b31db4a1e58fcd727c9.jpg",
    //   description:
    //     "What are the main differences between Medicare and Medicaid? (Detailed)",
    //   link: "/blog",
    // },
    {
      imageUrl: logo2,
      description: "Can Seniors take part in the Affordable Care Act?",
      link: "/blog2",
    },
    {
      imageUrl: logo3,
      description: "Demystifying AEP, OEP, and SEP in American Healthcare",
      link: "/blog3",
    },
    {
      imageUrl: logo4,
      description:
        "Understanding the Reality of Premium Tax Credits Under the Affordable Care Act",
      link: "/blog4",
    },
    {
      imageUrl: logo5,
      description:
        "Exploring $0/Month Health Insurance Eligibility Under the Affordable Care Act (ACA)",
      link: "/blog5",
    },
    {
      imageUrl: logo6,
      description:
        "Understanding How the US Government Supports Citizens Through Subsidies like the Affordable Care Act (ACA)",
      link: "/blog6",
    },
    {
      imageUrl: logo7,
      description:
        "Understanding Eligibility Criteria for Coverage Under the Affordable Care Act",
      link: "/blog7",
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <ImageCarousel />
      <div className="bx">
        {boxesData.map((box, index) => (
          <Link key={index} to={box.link} className="link">
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
