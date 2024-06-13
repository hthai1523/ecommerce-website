import images from "../../assets";
import Image from "../Image";

function BlogCard() {
  return (
    <div className="flex flex-col bg-red-400 shadow-lg rounded-2xl p-4 mx-auto hover:scale-105 duration-300">
      <Image
        src={images.}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg"
      />
    </div>
  );
}

export default BlogCard;
