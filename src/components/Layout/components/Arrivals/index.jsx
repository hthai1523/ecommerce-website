import { Link } from "react-router-dom";
// import img from "../../../../assets/productTest.png";
import Card from "../../../Card";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import routeConfig from "../../../../config/route";
import axios from "axios";
// import * as getServices from '../../../../apiServices/getServices';
import ReactLoading from "react-loading";

function Arrivals() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const rs = await axios.get("http://localhost:3000/clothes?_limit=6");
        setProducts(rs.data);
        console.log(products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true)
        console.error(error);
      } 
    };

    fetchData();

    // const fetchApi = async () => {

    //   const rs = await getServices.getAll();
    //   setProducts(rs);
    //   console.log(rs);
    // };

    // fetchApi();
  }, []);

  return (
    <div className="w-full h-[820px] py-16 bg-slate-100 flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold py-10">NEW ARRIVALS</h2>
      {isLoading ? (
        <ReactLoading height={"200px"} width={"200px"} color="#ADADAD" />
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%] px-[3px]"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              {/* <div className="flex items-center justify-between space-x-[100px] px-[20px]"> */}
              <Card data={product} />
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Link to={routeConfig.product}>
        <div className="text-center font-medium text-sm cursor-pointer transition-all border-2 border-solid rounded-md  border-primary text-primary py-3 px-5  hover:bg-primary hover:text-white  ">
          <span className="">View more</span>
        </div>
      </Link>
    </div>
  );
}

export default Arrivals;
