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
              <div
                key={index}
                style={{ backgroundColor: curColor }}
                className={
                  color === curColor
                    ? "rounded-full w-7 h-7 p-4 opacity-100 cursor-pointer flex items-center justify-center "
                    : "rounded-full w-7 h-7 p-4 cursor-pointer flex items-center justify-center"
                }
                onClick={() => handleSetColor(curColor)}
              >
                {color === curColor ? (
                  <FaCheck className="font-bold text-white bg-red-400 z-40" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductOptions;
