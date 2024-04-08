import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import PostFooter from "../component/PostFooter";
import BlogPage3 from "../component/BlogPages/BlogPage3";
import loader from "../assests/loader.gif";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    setTimeout(() => {
      setLoading(true);
    }, 3000);
    scrollToTop();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      {loading ? (
        <BlogPage3 />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img src={loader} alt="loader" width={100} />
        </div>
      )}

      <Footer />
      <PostFooter />
    </div>
  );
};

export default Blog;
