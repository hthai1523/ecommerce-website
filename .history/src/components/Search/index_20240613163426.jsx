import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch, AiOutlineLoading3Quarters } from "react-icons/ai";
import HeadlessTippy from "@tippyjs/react/headless";
import { useDebounce } from "../../hooks";
import { Wrapper as PopperWraper } from ".././Popper";
import ProductItem from "../ProductItem";
import { FaRegCircleXmark } from "react-icons/fa6";
import axios from "axios";
import ProductItemSearch from "../ProductItemSearch";
import getAllProductServices from "../../services/getAllProductServices";
import { searchService } from "../../services/searchServices";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [listResult, setListResult] = useState([]);

  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const data = await searchService(debounced);
      setSearchResult(data);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value.trimStart());
  };

  const handleSubmit = (e) => {};

  const handleOnClickProductItemSearch = () => {
    setShowResult(false);
    setSearchValue("");
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      placement="bottom-start"
      render={(attrs) => (
        <div
          className="text-[#161823bf] text-2xl font-semibold w-[360px] "
          tabIndex="-1"
          {...attrs}
        >
          <PopperWraper>
            <h4 className="text-[#27283180] px-3 py-[5px] font-semibold text-2xl ">
              Product
            </h4>
            <div className="overflow-y-auto">
              {searchResult.map((item) => (
                  <div onClick={handleOnClickProductItemSearch} key={item.id}>
                    <ProductItemSearch data={item}  />
                  </div>
                ))}
            </div>
          </PopperWraper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className="search">
        <input
          type="text"
          className="flex-1 text-lg text-black caret-emerald-700 bg-transparent h-full"
          ref={inputRef}
          value={searchValue}
          placeholder="Search for your product"
          spellCheck={false}
          onChange={(e) => handleChange(e)}
          onFocus={() => {
            setShowResult(true);
          }}
        />

        {!!searchValue && !loading && (
          <button
            onClick={handleClear}
            className="absolute right-[82px] top-1/2 translate-y-[-50%] text-[#16182357]"
          >
            <FaRegCircleXmark className="translate-x-[50%]"/>
          </button>
        )}

        {loading && (
          <AiOutlineLoading3Quarters className=" absolute right-[82px] top-1/2 translate-y-[-50%] text-[#16182357] loading" />
        )}

        {/* <div className="border-r border-gray-400 h-3/5 w-[0.83px] absolute right-[66px] top-[9px]"></div> */}

        <button
          className="text-[#16182357] w-[66px] text-[1.8rem] rounded-r-3xl hover:bg-[#16182308] active:bg-[#1618230f] "
          onMouseDown={(e) => e.preventDefault()}
        >
          <AiOutlineSearch />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
