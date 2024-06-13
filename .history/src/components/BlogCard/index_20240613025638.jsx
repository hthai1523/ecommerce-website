import images from "../../assets";
import Image from "../Image";

function BlogCard() {
  return (
    <div className="flex flex-col bg-red-400 shadow-lg rounded-2xl p-4 mx-auto hover:scale-105 duration-300">
      <Image
        src={images.user}
        alt="Blog"
        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg"
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officiis ab numquam sapiente! Ducimus saepe minima qui provident quam reiciendis mollitia doloremque repellat exercitationem fugiat! Nesciunt provident nisi atque quae.</p>
    </div>
  );
}

export default BlogCard;
