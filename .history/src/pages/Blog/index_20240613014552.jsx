import React from "react";
import BlogFeaturePosts from "../../components/BlogFeaturePosts";
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
