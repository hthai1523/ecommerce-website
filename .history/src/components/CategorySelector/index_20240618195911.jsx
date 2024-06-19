import React, { memo, useEffect, useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

import getAllCategoryList from "../../services/getAllCategoryList";
import { BiCategory } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import productListSlice from "../Layout/ProductListLayout/productListSlice";

const CategorySelector = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCategoryList();
        setCategoriesList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    dispatch(productListSlice.actions.setFilterCategory(selectedFilter));
  }, [selectedFilter, dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedFilter((prev) => (prev === category ? "" : category));
  };

  const memoizedCategoryList = useMemo(() => categoriesList, [categoriesList]);

  return (
    <div className="py-10 px-2 md:px-8 border botder-[#E2E2E2] w-full">
      <div className="border-l-4 border-l-black mb-6">
        <h1 className="font-bold text-xl pl-4 ">Category</h1>
      </div>
      <div className="flex flex-col space-y-4 overflow-y-auto h-52 w-full">
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
          memoizedCategoryList.map((item) => (
            <div
              onClick={() => handleCategoryClick(item)}
              className={`flex items-center justify-between cursor-pointer p-2 hover:opacity-70 w-full ${
                selectedFilter === item ? "bg-primary text-white" : ""
              } transition-all duration-200 ease-linear`}
              key={item} // Assuming item is a unique identifier
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
};

export default memo(CategorySelector);
