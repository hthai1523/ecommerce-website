import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneProductServices } from "../../services";
import { cartSlice } from "../../redux/slices";
import ProductOptions from "../../components/ProductOptions";
import Button from "../../components/Button";
import formatCurrentcy from "../../utils/formatCurrentcy";
import Description from "../../components/Description";
import Comment from "../../components/Layout/components/Comment";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [more, setMore] = useState("description");
  const { id } = useParams();
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getOneProductServices(id);
        setProduct(response);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      cartSlice.actions.addToCart({
        id: product.id,
        title: product.name,
        thumbnail: product.thumbnail,
        price: product.price,
        discountPercentage: product.discountPercentage,
        quantity: 1,
        rating: product.rating,
      })
    );
    toast.success(`Product ${product.title} added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handlePrevImage = () => {
    setImageIndex((prev) => {
      if (prev === 0) {
        return product.images.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNextImage = () => {
    setImageIndex((prev) => {
      if (prev === product.images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleChangeMore = (value) => {
    setMore(value);
  };

  const realPrice =
    product?.price - (product?.price * product?.discountPercentage) / 100;

  return (
    <div className="lg:mx-25 w-full flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <ClipLoader
            color={"#ADADAD"}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap py-16 gap-2 w-full">
            <div className="flex overflow-hidden w-full lg:w-1/2 relative">
              {product?.images.map((image, index) => (
                <Image
                  ref={imageRef}
                  key={index}
                  className="w-full h-[400px] lg:h-[600px] block object-contain transition-all duration-300 ease-in-out"
                  style={{
                    transform: `translateX(${-100 * imageIndex}%)`,
                    flexShrink: "0",
                    flexGrow: "0",
                  }}
                  src={image}
                />
              ))}
              {product?.images.length > 1 && (
                <>
                  <div
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-black font-black bg-gray-200 rounded-full p-2 cursor-pointer hover:scale-110 duration-150"
                  >
                    <FaChevronLeft />
                  </div>
                  <div
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-black font-black bg-gray-200 rounded-full p-2 cursor-pointer hover:scale-110 duration-150"
                  >
                    <FaChevronRight />
                  </div>
                </>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-5 w-full lg:w-1/2 mt-5 lg:my-auto">
              <h1 className="font-bold text-2xl lg:text-3xl">
                {product?.title}
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="font-semibold text-lg lg:text-xl text-primary">
                      {formatCurrentcy(realPrice)}
                    </p>
                    <p className="font-normal text-sm lg:text-base text-gray-500 line-through">
                      {formatCurrentcy(product?.price)}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    {product?.rating &&
                      [...Array(Math.floor(product?.rating))].map(
                        (_, index) => (
                          <FaStar key={index} className="text-yellow-400" />
                        )
                      )}
                  </div>
                </div>
                <div className="my-5 lg:my-10 text-gray-400 font-medium text-sm">
                  {product?.description}
                </div>
                <hr />
                <div className="mt-5 lg:mt-10">
                  <ProductOptions />
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="mt-5 lg:mt-10 text-center font-medium text-sm transition-all duration-200 bg-transparent border-2 border-solid rounded-lg border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white"
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-full py-16 lg:px-12 md:px-6 sm:px-4 space-y-4">
            <div className="space-x-6">
              <Button
                onClick={() => handleChangeMore("description")}
                className={`${
                  more === "description" ? "font-bold" : "font-normal"
                } text-2xl text-[#696969] transition-[font-weight] duration-300`}
              >
                Description
              </Button>
              <Button
                onClick={() => handleChangeMore("reviews")}
                className={`${
                  more === "reviews" ? "font-bold" : "font-normal"
                } text-2xl text-[#696969] transition-[font-weight] duration-300`}
              >
                Reviews
              </Button>
            </div>
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(${more === "description" ? "0" : "-100%"})`,
                }}
              >
                <Description data={product?.description} />
                <Comment data={product?.reviews} />
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

