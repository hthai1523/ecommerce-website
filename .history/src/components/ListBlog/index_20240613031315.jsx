import BlogCard from "../BlogCard";

function ListBlog(data) {
    console.log(data);
    console.log(data.thumbnail);
    console.log(data.title);
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {data.map((item) => (
        <BlogCard key={item.id} thumbnail={data.thumbnail} title={data.title} />
      ))}
    </div>
  );
}

export default ListBlog;
