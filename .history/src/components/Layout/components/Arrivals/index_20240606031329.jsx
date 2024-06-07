import { Link } from "react-router-dom";
import Card from "../../../Card";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import routeConfig from "../../../../config/route";
import ClipLoader from "react-spinners/ClipLoader";
import getAllProductServices from "../../../../services/getAllProductServices";

function Arrivals() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const rs = await getAllProductServices();
        setProducts(rs.slice(0, 6));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[820px] py-16 bg-slate-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold py-10">NEW ARRIVALS</h2>
      {isLoading ? (
        <ClipLoader
          color={"#ADADAD"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full max-w-[90%] lg:max-w-[80%] px-2"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Link to={routeConfig.product}>
        <div className="mt-10 text-center font-medium text-sm cursor-pointer transition-all border-2 border-solid rounded-md border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white">
          <span>View more</span>
        </div>
      </Link>
    </div>
  );
}

export default Arrivals;
