import React from "react";
import images from "../../assets";
import UserPost from "../BlogCard/UserPost";
function BlogFeaturePosts() {
  return (
    <div className="w-full">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Our Featured Posts
      </h1>
      <div className="w-full py-10 flex items-center flex-wrap gap-11">
        <div className="w-1/2 flex-1 ">
          <img
            src={images.blogImage}
            alt="ImageTest"
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 flex-1 ">
          <h3 className="text-lg font-semibold">
            Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
          </h3>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            dolor pariatur eligendi ratione laboriosam, perferendis ab repellat
            inventore nostrum accusamus suscipit dolores minus. Nobis nihil
            repellendus distinctio accusamus, quas itaque?
          </p>
          <UserPost />
        </div>
      </div>
    </div>
  );
}

export default BlogFeaturePosts;
