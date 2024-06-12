import { Link } from "react-router-dom";
import Button from "../Button";
import Image from "../Image";
import formatCurrentcy from "../../function/formatCurrentcy";

function Card({ data, url }) {

  const handleAddToCart = (e) => {
    e.preventDefault();
  };

  const realPrice = data.price - (data.price * data.discountPercentage) / 100;

  return (
    <div className="relative flex flex-col shadow-lg bg-white rounded-2xl cursor-pointer p-4 my-5 mx-auto w-[90%] max-w-[350px] hover:scale-105 duration-300">
      {data.rating > 4.5 && (
        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold p-2 rounded-tl-md">
          Best Seller
        </span>
      )}
      <Link to={`/productDetail/${data.id}`}>
        <Image
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg"
        />
      </Link>
      <div className="w-full flex-1 text-center mt-4 text-black">
        <h4 className="font-bold text-lg lg:text-2xl truncate">{data.title}</h4>
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
          <p className="font-semibold text-base lg:text-xl text-primary">
            {formatCurrentcy(realPrice)}
          </p>
          <p className="font-normal text-sm lg:text-base text-gray-500 line-through">
            {formatCurrentcy(data.price)}
          </p>
        </div>
        <Button
          onClick={handleAddToCart}
          className="text-center font-medium text-sm lg:text-base cursor-pointer border-2 border-solid rounded-lg border-primary text-white py-2 lg:py-3 px-4 lg:px-5 mt-4 bg-primary hover:opacity-70 transition-opacity duration-150 ease-in-out"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default Card;
