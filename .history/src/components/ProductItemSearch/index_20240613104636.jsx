import { Link } from "react-router-dom";
import formatCurrentcy from "../../function/formatCurrentcy";
import routes from "../../config/route";

function ProductItemSearch({ data }) {
  const realPrice = data.price - (data.price * data.discountPercentage) / 100;

  return (
    <Link
      to={routes.productDetail.replace(":id", data.id)}
      className="flex items-center px-8 py-[6px] cursor-pointer hover:bg-[#1618230a]   "
    >
      <img
        src={data.thumbnail}
        alt={data.title}
        className="rounded-full block w-14 h-14 object-contain mr-5 "
      />

      <div className="flex-1">
        <h4 className="text-2xl flex">
          <span className="">{data.title}</span>
        </h4>
        <div className="flex flex-row items-center gap-2">
          <span className="text-xl font-semibold text-primary">
            {formatCurrentcy(realPrice)}
          </span>
          <span className="text-base text-[#16182380] line-through">
            {formatCurrentcy(data.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductItemSearch;
