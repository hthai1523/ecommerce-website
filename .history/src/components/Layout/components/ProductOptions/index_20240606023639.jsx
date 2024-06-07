import React, { useState } from "react";
import Button from "../../../Button";
import { FaCheck } from "react-icons/fa6";

const colors = ["blue", "green", "black"];

function ProductOptions() {
  const [color, setColor] = useState(colors[0]);
  const [amout, setAmout] = useState(0)

  const handleSetColor = (curColor) => {
    setColor(curColor);
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
                    ? "rounded-full w-7 h-7 opacity-100 transition-all duration-200 border-2 border-white"
                    : "rounded-full w-7 h-7 transition-all duration-200"
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
