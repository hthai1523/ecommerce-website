import { Button } from "antd";
import images from "../../assets";
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
  return (
    <div className="w-full">
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Lastest Posts
      </h1>
      <div className="py-16">
        <ListBlog
            data={data}
        />
      </div>
      <Button />
    </div>
  );
}

export default LastestPosts;
