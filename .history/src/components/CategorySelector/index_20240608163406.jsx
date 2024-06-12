import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { TbShirtSport } from "react-icons/tb";

import { PiBaseballCapDuotone, PiPantsDuotone } from "react-icons/pi";
import getAllCategoryList from "../../services/getAllCategoryList";
import { BiCategory } from "react-icons/bi";


const dataArray = [
  { icon: <TbShirtSport />, text: "Shirt" },
  { icon: <PiBaseballCapDuotone />, text: "Cap" },
  { icon: <PiPantsDuotone />, text: "Pants" },
  // Add more items to your array as needed
];

export default function CategorySelector() {
  const [categoriesList, setCategoriesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true)
        const data = await getAllCategoryList()
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        setCategoriesList(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(true)
      }
    }
    fetch()
  }, [])


  return (
    <div className="py-10 px-[30px] border botder-[#E2E2E2]">
      <div className="border-l-4 border-l-black mb-6">
        <h1 className="font-bold text-xl pl-4 ">Category</h1>
      </div>
      <div className="flex flex-col space-y-4 overflow-y-auto h-32">
        {categoriesList.map((item, index) => (
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#EEE] p-2 "
            key={index}
          >
            <div className="flex items-center gap-3 text-xl">
              <div className="text-2xl"><BiCategory /></div>
              <span className="">{item}</span>
            </div>
            <div className="p-3">
              <FaChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
