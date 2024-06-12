import React, { useEffect, useState } from "react";
import Image from "../../../Image";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import formatCurrentcy from "../../../../function/formatCurrentcy";

function CartSection({ data }) {
  // const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
  //   useCartContext();

  // const quantity = getItemQuantity(data.id);

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
              <span>{formatCurrentcy(data.price)}</span>
        </td>
        <td className="mt-9">
          <div className="w-36 h-14 bg-[#ebebeb] flex items-center justify-between mx-auto">
           
            <div
              className="p-4 cursor-pointer transition-colors duration-300 ease-in-out active:bg-gray-400"
            >
              <FaMinus className="" />
            </div>
            <p className="">{data.quantity}</p>
            <div
              // onClick={() => increaseCartQuantity(data.id)}
              className="p-4 cursor-pointer transition-colors duration-300 ease-in-out active:bg-gray-400"
            >
              <FaPlus />
            </div>
          </div>
        </td>
        <td className="text-right w-[8%] mt-9">
          {/* {formatCurrentcy(quantity * data.price)} */}
          999
        </td>
      </tr>
    </tbody>
  );
}

export default CartSection;
