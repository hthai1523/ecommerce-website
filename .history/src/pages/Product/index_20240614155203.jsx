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
import Button from "../../components/Button";

function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortNameAsc, setSortNameAsc] = useState(false);
  const [page, setPage] = useState(9);
  const filterCategory = useSelector(filterCategoryRemainingSelector);

  // useMemo(() => {
  //   if (loading) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let rs;
        if (filterCategory) {
          rs = await getAllProductByCategory(filterCategory);
        } else {
          const response = await api.get('/products', {
            params: {
              limit: 9,
              skip: page
            }
          });
          rs = response.data.products;
        }
        setListProduct((prev) => rs);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [filterCategory, page]);

  const handleViewMore = () => {
    setPage(prev => prev + 9)
  }


  const handleSort = () => {
    setSortNameAsc(!sortNameAsc);
    setListProduct((prev) => {
      const sortedList = [...prev].sort((a, b) => 
        sortNameAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
      return sortedList;
    });
  };

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
        <div className="flex flex-col items-center space-y-6 my-4">
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

          <Button onClick={handleViewMore} className="text-center font-medium text-sm cursor-pointer transition border-2 border-solid rounded-md border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white">
            View More
          </Button>

        </div>
      )}
    </div>
  );
}

export default Product;
