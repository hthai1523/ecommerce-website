import React from 'react'
import images from '../../assets';
function BlogFeaturePosts() {
  return (
    <div className="w-full">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Our Featured Posts
      </h1>
      <div className="w-full py-10 flex items-center">
        <div className="flex-1 ">
          <img src={images.blogImage} alt="ImageTest" className='w-full object-cover rounded-lg' />
        </div>
        <div className="flex-1 ">
          <h2 className=''>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h2>
        </div>
      </div>
    </div>
  );
}

export default BlogFeaturePosts;
