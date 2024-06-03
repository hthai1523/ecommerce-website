import Button from "../../../Button";
import Card from "../../../Card";
import { useEffect, useState } from "react";
import {
  sortProductCount,
  sortProductDate,
  sortProductRate,
} from "../../../../function";
import getAllProductServices from "../../../../services/getAllProductServices.js";
import { MotionDiv } from "../../../../lib/framer.js";
import ReactLoading from "react-loading";

function PreProduct() {
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const productList = await getAllProductServices();
        setProducts(productList || []);
        setListProduct(productList || []);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);

        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (sortFunction) => {
    const sortedListProduct = [...products].sort(sortFunction);
    setListProduct(sortedListProduct.slice(0, 5));
    console.log(sortedListProduct);
  };
  // sort by luot ban
  const handleBestSeller = () => {};

  const handleRenderAll = () => {
    setListProduct(products);
  };
  // { position: "relative" }
  return (
    <div className=" w-full  bg-slate-100 mx-auto text-center py-16">
      {/* Menu */}
      <div>
        <Button
          onClick={() => handleSort(sortProductDate)}
          extraClassName="relative"
          separate={true}
        >
          NEW ARRIVALS
        </Button>
        <Button
          onClick={() => handleSort(sortProductRate)}
          extraClassName="relative"
          separate={true}
        >
          RECOMMENDED
        </Button>
        <Button
          onClick={() => {
            handleSort(sortProductCount);
          }}
          separate={true}
          extraClassName="relative"
        >
          BEST SELLER
        </Button>
        <Button onClick={handleRenderAll} extraClassName="relative">
          ALL
        </Button>
      </div>

      {/* Card item */}
      {isLoading ? (
        <ReactLoading height={"200px"} width={"200px"} color="#ADADAD" />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ">
          {listProduct.map((item) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card data={item} />
            </MotionDiv>
          ))}
        </div>
      )}
    </div>
  );
}

export default PreProduct;
