import Card from "../../components/Card";
import { useEffect, useState, useMemo } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { filterCategoryRemainingSelector, sidebarSelector } from "../../redux/selectors";
import getAllProductByCategory from "../../services/getAllProductByCategory";
import { api } from "../../constant";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import sidebarSlide from "../../components/Layout/SideBar/sidebarSlice";

const Product = () => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const filterCategory = useSelector(filterCategoryRemainingSelector);
  const isSidebarOpen = useSelector(sidebarSelector)

  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(sidebarSlide.actions.openSidebar())
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let rs;
        if (filterCategory) {
          rs = await getAllProductByCategory(filterCategory);
          setListProduct(rs);
        } else {
          const response = await api.get("/products", {
            params: {
              limit: 9,
              skip: page * 9, // Adjusted the skip value
            },
          });
          rs = response.data.products;
          setListProduct((prev) => (page === 0 ? rs : [...prev, ...rs]));
        }
        setLoading(false);
        setLoadingMore(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchData();
  }, [filterCategory, page]);

  const handleViewMore = () => {
    setLoadingMore(true); // Set loading more state
    setPage((prev) => prev + 1);
  };

  const memoizedProductList = useMemo(() => listProduct, [listProduct]);

  return (
    <div>
      <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">
        Our Collection Of Products
      </h1>
      <div className="w-10 h-10 bg-red-400" onClick={handleOpenSidebar}>

      </div>

      {false ? (
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
            {memoizedProductList.map(
              (product) =>
                product.title && (
                  <div key={product.id}>
                    <Card data={product} />
                  </div>
                )
            )}
          </div>

          {loadingMore && (
            <div className="flex items-center justify-center w-full">
              <Loader />
            </div>
          )}

          {!filterCategory && (
            <>
              <Button
                onClick={handleViewMore}
                className="text-center font-medium text-sm cursor-pointer transition border-2 border-solid rounded-md border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white"
              >
                View More
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
