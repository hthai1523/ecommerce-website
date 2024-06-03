import tee from "../../assets/teeShirt.jpg";
import { FaStar } from "react-icons/fa6";


function ProductItem({name, image, price}) {
  return (
    <div className="flex items-center px-8 py-[6px] cursor-pointer hover:bg-[#1618230a]   ">
      <img
        src={image}
        alt={name}
        className="rounded-full block w-10 h-10 object-cover mr-5 "
      />

      <div className="flex-1">
        <h4 className="text-2xl flex">
          <span className="">{name}</span>
         {/* {star && <FaStar className="ml-3 text-emerald-400"/>} */}
        </h4>
        <span className="text-xl text-[#16182380]">{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
