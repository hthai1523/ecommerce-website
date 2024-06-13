function BlogFeaturePosts() {
  return (
    <div className="w-full">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Our Featured Posts
      </h1>
      <div className="w-full py-10 flex items-center">
        <div className="w-1/2 h-10 flex-1 bg-red-500"></div>
        <div className="w-1/2 h-10 first-letter:flex-1 bg-blue-500"></div>
      </div>
    </div>
  );
}

export default BlogFeaturePosts;
