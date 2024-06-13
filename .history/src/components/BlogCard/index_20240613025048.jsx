import images from "../../assets";
import Image from "../Image";

function BlogCard() {
  return (
    <div className="flex flex-col shadow-lg bg-white rounded-2xl p-4 my-5 mx-auto w-[90%] max-w-[350px] hover:scale-105 duration-300">
      <Image
        src={images.blogImage}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg"
      />
    </div>
  );
}

export default BlogCard;
