import { Link } from "react-router-dom";
import Button from "../Button";
import Image from "../Image";
import formatCurrentcy from "../../function/formatCurrentcy";
import { useDispatch } from "react-redux";
import cartSlice, { addToCart } from "../../pages/Cart/cartSlice"; // Make sure this import path is correct
import { realPrice } from "../../function";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Card({ data, url }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(cartSlice.actions.addToCart({
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      price: data.price,
      discountPercentage: data.discountPercentage,
      quantity: 1,
      rating: data.rating,
    }));
    toast.success(`Product ${data.title} added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const price = realPrice(data.price, data.discountPercentage);

  return (
    <div className="relative bg-red-500 flex flex-col shadow-lg  rounded-2xl cursor-pointer p-4 mx-auto w-[90%] max-w-[350px] hover:scale-105 duration-300">
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
            {formatCurrentcy(price)}
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
