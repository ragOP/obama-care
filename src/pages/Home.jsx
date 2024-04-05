import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Main />
      <Footer />
      <PostFooter />
    </div>
  );
};

export default Home;
