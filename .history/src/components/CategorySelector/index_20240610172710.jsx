import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { TbShirtSport } from "react-icons/tb";

import { PiBaseballCapDuotone, PiPantsDuotone } from "react-icons/pi";
import getAllCategoryList from "../../services/getAllCategoryList";
import { BiCategory } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import getAllProductByCategory from "../../services/getAllProductByCategory";
import { useDispatch } from "react-redux";
import productListSlice, { setProductList } from "../Layout/ProductListLayout/productListSlice";

const dataArray = [
  { icon: <TbShirtSport />, text: "Shirt" },
  { icon: <PiBaseballCapDuotone />, text: "Cap" },
  { icon: <PiPantsDuotone />, text: "Pants" },
  // Add more items to your array as needed
];

export default function CategorySelector() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCategoryList();
        setCategoriesList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(true);
      }
    };
    fetch();
  }, []);



   const handleCategoryClick = (category) => {
    // try {
    //   dispatch(setProductList(category))
    // } catch (error) {
    //   console.error(error);
    //   // setIsLoading(false);
    // }
    if(selectedFilter)
  };

  return (
    <div className="py-10 px-[30px] border botder-[#E2E2E2]">
      <div className="border-l-4 border-l-black mb-6">
        <h1 className="font-bold text-xl pl-4 ">Category</h1>
      </div>
      <div className="flex flex-col space-y-4 overflow-y-auto h-52">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <ClipLoader
              color="#ADADAD"
              loading={isLoading}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          categoriesList.map((item, index) => (
            <div
            onClick={() =>  handleCategoryClick(item)}
              className="flex items-center justify-between cursor-pointer p-2 bg-black/40 text-white "
              key={index}
            >
              <div className="flex items-center gap-3 text-xl">
                <div className="text-2xl">
                  <BiCategory />
                </div>
                <span className="">{item}</span>
              </div>
              <div className="p-3">
                <FaChevronRight />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
