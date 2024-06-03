import { AiOutlineSortAscending } from "react-icons/ai";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { MotionDiv } from "../../lib/framer";
import ReactLoading from "react-";
import axios from "axios";
import getAllProductServices from "../../services/getAllProductServices";
function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSortName, setIsSortName] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const rs1 = await axios.get(
        //   "https://fakestoreapi.com/products/category/men's clothing"
        // );
        // const rs2 = await axios.get(
        //   "https://fakestoreapi.com/products/category/women's clothing"
        // );
        // setListProduct((prev) => [...prev, ...rs1.data, ...rs2.data]);
        const rs = await getAllProductServices()
        setListProduct(rs)
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
        <h1 className="text-[#3D3D3D] text-4xl font-semibold font-sans">Our Collection Of Products</h1>
        <div
          onClick={handleSort}
          className="text-3xl hover:opacity-70 cursor-pointer p-3"
        >
          <AiOutlineSortAscending />
        </div>
        {loading ? (
          <div className="flex items-center justify-center">
            <ReactLoading height={"200px"} width={"200px"} color="#ADADAD" />
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
    </div>
  );
}

export default Product;
