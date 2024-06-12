import { AiOutlineSortAscending } from "react-icons/ai";
import Card from "../../components/Card";
import { useEffect, useMemo, useState } from "react";
import { MotionDiv } from "../../lib/framer";
import ClipLoader from "react-spinners/ClipLoader";
import getAllProductServices from "../../services/getAllProductServices";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { productListRemainingSelector } from "../../redux/selectors";
function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [isSortName, setIsSortName] = useState(false);
  const productList = useSelector(productListRemainingSelector)

  useMemo(() => {
    (function () {
      window.scrollTo(0, 0);
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const rs = await getAllProductServices();
        setListProduct(rs);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    console.log("====================================");
    console.log("filter");
    console.log("====================================");
  };

  // sort by name ascending
  const handleSort = () => {};

  return (
    <div>
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
          Our Collection Of Products
        </h1>
        <div
          onClick={handleSort}
          className="text-3xl hover:opacity-70 cursor-pointer p-3"
        >
          <AiOutlineSortAscending />
        </div>
        {loading ? (
          <div className="flex items-center justify-center">
            <ClipLoader
              color={"#ADADAD"}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
            {listProduct.map(
              (product) =>
                product.title && (
                  <div key={product.id}>
                    <Card data={product} />
                  </div>
                )
            )}
          </div>
        )}
      </MotionDiv>
      <ToastContainer />
    </div>
  );
}

export default Product;
