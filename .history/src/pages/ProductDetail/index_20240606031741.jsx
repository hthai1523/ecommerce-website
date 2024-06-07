import Image from "../../components/Image";
import Button from "../../components/Button";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import ProductOptions from "../../components/Layout/components/ProductOptions";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCartContext } from "../../contexts/CartContext";
import formatCurrentcy from "../../function/formatCurrentcy";
import getOneProductServices from "../../services/getOneProductServices";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function ProductDetail() {
  const { addToCart } = useCartContext();
  const [product, setProduct] = useState();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { cart, setCart } = useCartContext();
  const [imageIndex, setImageIndex] = useState(0);
  const sizes = ["small", "medium", "large"];
  const { id } = useParams();
  const imageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOneProductServices(id);
        setProduct(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleImageCLick = (index) => {
    setSelectedImage(index);
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

  const realPrice =
    product?.price - (product?.price * product?.discountPercentage) / 100;

  return (
    <div className="my-20 lg:mx-25 w-full">
      <div className="flex flex-wrap w-full">
        <div className="flex overflow-hidden w-full lg:w-1/2 relative">
          {product?.images.map((image, index) => (
            <Image
              ref={imageRef}
              key={index}
              className="w-full h-auto block object-cover transition-all duration-300 ease-in-out"
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
        <div className="flex-1 flex flex-col items-center gap-5 w-full lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="font-bold text-2xl lg:text-3xl">{product?.title}</h1>
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
                  [...Array(Math.floor(product?.rating))].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
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
              className="mt-5 lg:mt-10 text-center font-medium text-sm transition-all duration-700 bg-transparent border-2 border-solid rounded-lg border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
