import { AiOutlineSortAscending } from "react-icons/ai";
import Card from "../../components/Card";
import { useEffect, useMemo, useState } from "react";
import { MotionDiv } from "../../lib/framer";
import ClipLoader from "react-spinners/ClipLoader";
import getAllProductServices from "../../services/getAllProductServices";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { filterCategoryRemainingSelector } from "../../redux/selectors";
import getAllProductByCategory from "../../services/getAllProductByCategory";
import { api } from "../../constant";

function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [isSortName, setIsSortName] = useState(false);
  const filterCategory = useSelector(filterCategoryRemainingSelector);
  const [page, setPage] = useState(0)

  useMemo(() => {
    loading &&
      (function () {
        window.scrollTo(0, 0);
      })();
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let rs;
        if (filterCategory) {
          rs = await getAllProductByCategory(filterCategory);
        } else {
          let demo = await api.get('/products', {
            params: {
              limit: 9,
              skip: page
            }
          });
          rs = demo.data.products
          console.log('====================================');
          console.log(rs);
          console.log('====================================');
        }
        setListProduct(prev => [...prev, ...rs]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filterCategory, page]);

  const handleScroll = () => {
    console.log("height: ", document.documentElement.scrollHeight)
    console.log("top: ", document.documentElement.scrollTop)
    console.log("window: ", window.innerHeight)

    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage(prev => prev + 9)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFilter = () => {
    console.log("====================================");
    console.log("filter");
    console.log("====================================");
  };

  // sort by name ascending
  const handleSort = () => {};

  return (
    <div>
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
          <div className="flex flex-col items-center">
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
              {listProduct.map(
                (product) =>
                  product.title && (
                    <div key={product.id}>
                      <Card data={product} />
                    </div>
                  )
              )}
            </div>
            <div className="w-full flex items-center justify-center space-x-6 mb-4"></div>
          </div>
        )}
    </div>
  );
}

export default Product;
