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
        console.log("====================================");
        console.log(response);
        console.log("====================================");
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

  return (
    <div className="my-20 mx-25 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex overflow-hidden w-1/2 relative">
          {product?.images.map((image, index) => {
            return (
              <Image
                ref={imageRef}
                key={index}
                className={`w-full h-[80%] block object-cover transition-all duration-300 ease-in-out  `}
                style={{
                  translate: `${-100 * imageIndex}%`,
                  flexShrink: "0",
                  flexGrow: "0",
                }}
                src={image}
              />
            );
          })}
          {product?.images.length > 1 && (
            <>
              <div
                onClick={handlePrevImage}
                className="absolute top-[50%] left-[0] translate-y-[-50%]  text-2xl text-black font-black bg-[#EEE] rounded-full w-fit h-fit my-auto p-2 cursor-pointer hover:scale-110 duration-150 "
              >
                <FaChevronLeft />
              </div>
              <div
                onClick={handleNextImage}
                className="absolute top-[50%] right-[0] translate-y-[-50%]  text-2xl text-black font-black bg-[#EEE] rounded-full w-fit h-fit my-auto p-2 cursor-pointer hover:scale-110 duration-150 "
              >
                <FaChevronRight />
              </div>
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-5 w-1/2">
          <h1 className="font-bold text-3xl ">
            {/* Under Armour Men's Playoff 2.0 Golf Polo */}
            {product?.title}
          </h1>
          <div>
            <div className="flex items-center gap-3">
              <h4 className="block text-2xl font-bold text-[#414141]">
                {formatCurrentcy(product?.price)}
              </h4>
              <div className="flex gap-1 item-center ">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-[#e0e3e4]" />
              </div>
            </div>
            <div className="mt-10 mb-12 ml-7 text-[#b4b4b4] font-medium text-sm">
              <ul className="list-disc">
                <li>
                  100% Polyester Imported Soft anti-pick, anti-pill fabric is
                  extremely breathable & lightweight
                </li>
                <li>
                  Quick-dry for all-day comfort 4-way stretch construction moves
                  better in every direction
                </li>
                <li>
                  Material wicks sweat & dries really fast Self-fabric collar
                </li>
                <li>Updated performance fit Heat seal logos</li>
              </ul>
            </div>
            <hr />

            <div className="mt-10">
              <ProductOptions />
            </div>
            <Button
              onClick={handleAddToCart}
              className="mt-10 text-center font-medium text-sm cursor-pointer transition-all bg-transparent border-2 border-solid rounded-lg border-primary text-primary py-3 px-5  hover:bg-primary hover:text-white "
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
