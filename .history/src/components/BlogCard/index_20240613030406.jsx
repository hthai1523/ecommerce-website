import images from "../../assets";
import Image from "../Image";
import UserPost from "./UserPost";

function BlogCard() {
  return (
    <div className="flex flex-col space-y-4 w-full rounded-2xl mx-auto hover:scale-105 duration-300">
      <Image
        src={images.blogImage}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
      />
      <UserPost />
      <p className="text-xl font-normal">Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
    </div>
  );
}

export default BlogCard;
