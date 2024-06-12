function CartMainSection({ children }) {
  return (
    <>
      <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-[#ebebeb]">
        <tr>
          <th className="py-[5px]  ">Product</th>
          <th className="py-[5px]  ">Price</th>
          <th className="py-[5px] text-center ">Quantity</th>
          <th className="py-[5px] text-right ">Subtotal</th>
        </tr>
      </thead>
    </>
  );
}

export default CartMainSection;
