import React, { useEffect, useState } from "react";
import Image from "../../../Image";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import formatCurrentcy from "../../../../function/formatCurrentcy";
import { useDispatch } from "react-redux";
import { realPrice } from "../../../../function";
import cartSlice from "../../../../pages/Cart/cartSlice";

function CartSection({ data }) {
  // const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
  //   useCartContext();

  // const quantity = getItemQuantity(data.id);

  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    dispatch(cartSlice.actions.minusQuantity(data.id));
  };

  const handlePlusQuantity = () => {
    dispatch(cartSlice.actions.plusQuantity(data.id));
  };

  const price = realPrice(data.price, data.discountPercentage);

  return (
    <tbody className="">
      <tr>
        <td className="table mt-9">
          <Image
            src={data.thumbnail}
            alt={data.title}
            className="table-cell max-w-[187px] object-cover"
          />
          <div className="table-cell pl-9 align-middle">
            <h4 className="text-xl font-bold">{data.title}</h4>
            <div className="text-sm font-light flex gap-2">
              <span>Rate</span>
              <div className="flex items-center gap-1">
                {[...Array(Math.floor(data.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </td>
        <td className="mt-9">
          <div className="flex flex-row items-center justify-start gap-2 mt-2 text-left">
            <p className="font-semibold text-base lg:text-xl text-primary">
              {formatCurrentcy(price)}
            </p>
            <p className="font-normal text-sm lg:text-base text-gray-500 line-through">
              {formatCurrentcy(data.price)}
            </p>
          </div>{" "}
        </td>
        <td className="mt-9">
          <div className="w-36 h-14 bg-[#ebebeb] flex items-center justify-between mx-auto">
            <div
              onClick={handleMinusQuantity}
              className="p-4 cursor-pointer transition-colors duration-300 ease-in-out active:bg-gray-400"
            >
              <FaMinus />
            </div>
            <p className="">{data.quantity}</p>
            <div
              onClick={handlePlusQuantity}
              className="p-4 cursor-pointer transition-colors duration-300 ease-in-out active:bg-gray-400"
            >
              <FaPlus />
            </div>
          </div>
        </td>
        <td className="text-right w-[8%] mt-9">
          {formatCurrentcy(price * data.quantity)}
        </td>
      </tr>
    </tbody>
  );
}

export default CartSection;
