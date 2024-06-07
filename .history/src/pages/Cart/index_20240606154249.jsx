import React, { useEffect, useMemo, useState } from "react";
import CartMainSection from "../../components/Layout/components/CartMainSection";
import CartSection from "../../components/Layout/components/CartSection";
import { MotionDiv } from "../../lib/framer";
import Button from "../../components/Button";
import { useCartContext } from "../../contexts/CartContext";
import { formatCurrentcy } from "../../function";
import Footer from "../../components/Layout/components/Footer";

function Cart() {
  const { cart } = useCartContext();
  useMemo(() => {
    (function () {
      window.scrollTo(0, 0);
    })();
  }, []);

  const total = formatCurrentcy(
    cart.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0)
  );

  return (
    <div className="w-full mt-[102px] mb-20 p-5 rounded-lg shadow-xl container mx-auto ">
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <table className="min-w-full text-left text-base capitalize font-light whitespace-nowrap table-auto mb-10">
            <CartMainSection />
            {cart.map((item) => (
              <CartSection data={item} key={item.id} />
            ))}
          </table>
          <div className="flex justify-between">
            <Button
              to="/"
              className="text-center font-medium text-sm cursor-pointer transition-all bg-transparent border-2 border-solid rounded-md border-[#414141] py-4 px-12  hover:bg-[#ebebeb] hover:border-slate-400  "
            >
              Return to Shop
            </Button>
            <Button className="text-center font-medium text-sm cursor-pointer transition-all bg-transparent border-2 border-solid rounded-md border-[#414141] py-4 px-12  hover:bg-[#ebebeb] hover:border-slate-400  ">
              Update Cart
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
            <Button className="text-center font-medium text-sm text-slate-50 cursor-pointer transition-all border-2 border-solid rounded-md bg-primary-color py-4 px-12  hover:border-slate-400  ">
              Process to checkout
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}

export default Cart;
