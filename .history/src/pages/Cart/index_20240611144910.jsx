import React, { useEffect, useMemo, useState } from "react";
import CartMainSection from "../../components/Layout/components/CartMainSection";
import CartSection from "../../components/Layout/components/CartSection";
import { MotionDiv } from "../../lib/framer";
import Button from "../../components/Button";
import { formatCurrentcy, realPrice } from "../../function";
import Footer from "../../components/Layout/components/Footer";
import { useSelector } from "react-redux";
import { cartsRemainingSelector } from "../../redux/selectors";

function Cart() {
  useMemo(() => {
    (function () {
      window.scrollTo(0, 0);
    })();
  }, []);

  // const total = formatCurrentcy(
  //   cart.reduce((total, cartItem) => {
  //     return total + cartItem.price * cartItem.quantity;
  //   }, 0)
  // );

  const cart = useSelector(cartsRemainingSelector);

  const total = formatCurrentcy(
    cart.reduce((total, cartItem) => {
      return (
        total +
        realPrice(cartItem.price, cartItem.discountPercentage) *
          cartItem.quantity
      );
    }, 0)
  );
  return (
    <div className="w-full mt-[102px] mb-20 p-5 rounded-lg shadow-xl container mx-auto ">
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <table className="w-full text-left text-base capitalize font-light whitespace-nowrap table-auto mb-10">
            <CartMainSection />
            {cart.map((item) => (
              <CartSection data={item} key={item.id} />
            ))}
          </table>
          <div className="flex justify-between">
            <Button
              to="/"
              className="mt-10 text-center font-medium text-sm cursor-pointer transition-all border-2 border-solid rounded-md border-primary text-primary py-3 px-5 hover:bg-primary hover:text-white"
            >
              Return to Shop
            </Button>
          </div>
        </div>

        <div className="max-w-[470px] w-full rounded border-solid border-2 border-black mt-20 ">
          <div className="p-3 space-y-3">
            <h4 className="text-xl font-medium">Cart Total</h4>
            <ul className="space-y-3">
              <li className="border-b border-slate-800 py-2 text-sm">
                Subtotal
                <span className="float-right">{total}</span>
              </li>
              <li className="border-b border-slate-800 py-2 text-sm">
                Shipping
                <span className="float-right">Free</span>
              </li>
              <li className="text-sm">
                Total
                <span className="float-right">{total}</span>
              </li>
            </ul>
            <Button >
              Process to checkout
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}

export default Cart;
