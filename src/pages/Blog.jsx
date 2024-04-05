import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";
import BlogPage from "../component/BlogPage";

const Blog = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <BlogPage />
      <Footer />
      <PostFooter />
    </div>
  );
};

export default Blog;
