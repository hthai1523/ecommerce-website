import BlogCard from "../BlogCard";

function ListBlog() {
    return ( 
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
     );
}

export default ListBlog;