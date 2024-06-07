import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const colors = ["blue", "green", "black"];

function ProductOptions() {
  const [color, setColor] = useState(-1);

  const handleSetColor = (curColor) => {
    setColor((prev) => {
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
                className={`rounded-full w-7 h-7 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
                  color === curColor ? "" : "opacity-70"
                }`}
                onClick={() => handleSetColor(curColor)}
              >
                {color === curColor && (
                  <FaCheck className="text-base text-white" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductOptions;
