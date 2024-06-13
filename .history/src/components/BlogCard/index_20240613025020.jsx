import images from "../../assets";
import Image from "../Image";

function BlogCard() {
  return (
    <div className="max-w-[350px] mx-auto">
      <Image
        src={images.blogImage}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg"
      />
    </div>
  );
}

export default BlogCard;
