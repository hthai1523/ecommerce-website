import images from "../../assets";
import Button from "../Button";
import ListBlog from "../ListBlog";

const data = [
  {
    id: 1,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    id: 2,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    id: 3,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    id: 4,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    id: 5,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
  {
    id: 6,
    thumbnail: images.blogImage2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
  },
];

function LastestPosts() {
  const handleLoadMore = () => {
    alert("")
  };
  return (
    <div className="w-full">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Lastest Posts
      </h1>
      <div className="py-16 flex flex-col items-center">
        <ListBlog data={data} />
        <Button
          onClick={handleLoadMore}
          className=" mt-10 text-center font-medium text-sm cursor-pointer transition-all border-2 border-solid rounded-md border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default LastestPosts;
