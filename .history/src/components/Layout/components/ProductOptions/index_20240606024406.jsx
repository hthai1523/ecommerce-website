import React, { useState } from "react";
import Button from "../../../Button";
import { FaCheck } from "react-icons/fa6";

const colors = ["blue", "green", "black"];

function ProductOptions() {
  const [color, setColor] = useState(-1);
  const [amout, setAmout] = useState(0)

  const handleSetColor = (curColor) => {
    setColor(prev => {
      if (prev === curColor) {
        return -1;
      }
      return curColor;
    });
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <p className="text-xl font-semibold">Colors:</p>
        <div className="flex items-center gap-3">
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={
                  color === curColor
                    ? "rounded-full w-7 h-7 opacity-100  block border-2 border-black"
                    : "rounded-full w-7 h-7 block border-2 border-black"
                }
                onClick={() => handleSetColor(curColor)}
              >
                {color === curColor ? (
                  <FaCheck className="text-base text-white mx-auto" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductOptions;
