import React from "react";
import Slider from "../../components/Slider";
import { MotionDiv } from "../../lib/framer";
import BlogFeaturePosts from "../../components/Layout/components/BlogFeaturePosts";
import Footer from "../../components/Layout/components/Footer";
function Blog() {
  (function () {
    window.scrollTo(0, 0);
  })();

  return (
    <div className="flex flex-col py-16">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Our Featured Posts
      </h1>
      <div></div>
    </div>
  );
}

export default Blog;
