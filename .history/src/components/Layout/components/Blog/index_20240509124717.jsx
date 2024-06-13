import BlogContainer from "../../../BlogContainer";

function Blog() {
  return (
    // just 2 stories per page
    <div className="flex justify-center m-5 w-full"> 
        <BlogContainer >This is my story</BlogContainer>
        <BlogContainer >This is my story</BlogContainer>
    </div>
  );
}

export default Blog;
