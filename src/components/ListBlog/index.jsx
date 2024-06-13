import BlogCard from "../BlogCard";

function ListBlog({data}) {

  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {data.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ListBlog;
