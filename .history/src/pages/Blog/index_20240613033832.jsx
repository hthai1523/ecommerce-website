import React from "react";
import BlogFeaturePosts from "../../components/BlogPosts";
import LastestPosts from "../../components/BlogPosts/LastestPosts";
function Blog() {
  (function () {
    window.scrollTo(0, 0);
  })();

  return (
    <div className="flex flex-col py-16">
      <BlogFeaturePosts />
      <LastestPosts />
    </div>
  );
}

export default Blog;
