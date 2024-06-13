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
      <BlogFeaturePosts />
    </div>
  );
}

export default Blog;
