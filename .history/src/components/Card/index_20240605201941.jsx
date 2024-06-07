import { Link } from "react-router-dom";
import Button from "../Button";
import Image from "../Image";
import { useCartContext } from "../../contexts/CartContext";
import formatCurrentcy from "../../function/formatCurrentcy";

function Card({ data, url, isBestSeller = true }) {
  const { addToCart } = useCartContext();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(data);
  };

  const realPrice = data.price - (data.price * data.discountPercentage) / 100;

  return (
    <div className="flex flex-col gap-2 raltive shadow-lg  bg-white  rounded-2xl cursor-pointer  p-2 my-5 mx-auto w-[215px] lg:w-[350px] hover:scale-105 duration-300">
      {/* {isBestSeller && <span className="pointer-events-none bg-red-500 tex``````````````````````t-white text-xs font-semibold p-2 rounded-tl-md">Best Seller</span>} */}
      <Link to={`/productDetail/${data.id}`}>
        <Image
          src={data.thumbnail}
          alt=""
          className="w-[330px] h-[330px] object-contain rounded-lg"
        />
      </Link>

      <div className="w-full text-center mt-4 text-black ">
        <h4 className="font-bold text-2xl truncate">{data.title}</h4>
        <p className="font-normal text-xl text-primary w-full block">
          {formatCurrentcy(realPrice)}{" "}
          <p className="font-normal text-base line-through text-black">
            {formatCurrentcy(data.price)}
          </p>
        </p>

        <Button
          onClick={(e) => {
            handleAddToCart(e);
          }}
          className="text-center font-medium text-sm cursor-pointer border-2 border-solid rounded-lg border-primary text-white py-3 px-5 mt-2 bg-primary hover:opacity-70  "
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default Card;
