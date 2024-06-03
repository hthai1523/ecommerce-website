import tee from "../../assets/teeShirt.jpg";
import { FaStar } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function ProductItemSearch({data, star}) {
  return (
    <Link to={`/productDetail/${data.id}`} className="flex items-center px-8 py-[6px] cursor-pointer hover:bg-[#1618230a]   ">
      <img
        src={data.image}
        alt={data.title}
        className="rounded-full block w-10 h-10 object-cover mr-5 "
      />

      <div className="flex-1">
        <h4 className="text-2xl flex">
          <span className="">{data.title}</span>
         {star && <FaStar className="ml-3 text-emerald-400"/>}
        </h4>
        <span className="text-xl text-[#16182380]">{data.price}</span>
      </div>
    </Link>
  );
}

export default ProductItemSearch;
