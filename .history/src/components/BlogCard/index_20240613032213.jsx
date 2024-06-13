import images from "../../assets";
import Image from "../Image";
import UserPost from "./UserPost";

function BlogCard(Ơ) {

  return (
    <div className="flex flex-col space-y-4 w-full rounded-2xl mx-auto hover:scale-105 duration-300 ">
      <Image
        src={images.blogImage2}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg"
      />
      <UserPost />
      <p className="text-xl font-normal cursor-pointer hover:underline">{data.title}</p>
    </div>
  );
}

export default BlogCard;
