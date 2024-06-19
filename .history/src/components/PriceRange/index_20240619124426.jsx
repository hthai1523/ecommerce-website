import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function PriceRange() {
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === name ? checked : false;
        return acc;
      }, {}),
    }));
  };

  return (
    <div className="py-10 px-[30px] border botder-[#E2E2E2]">
      <div className="border-l-4 border-l-black mb-6">
        <h1 className="font-bold text-xl pl-4 ">Price</h1>
      </div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxState.checkbox1}
              onChange={handleCheckboxChange}
              name="checkbox1"
            />
          }
          label="$0 - $100"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxState.checkbox2}
              onChange={handleCheckboxChange}
              name="checkbox2"
            />
          }
          label="$100 - $200"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxState.checkbox3}
              onChange={handleCheckboxChange}
              name="checkbox3"
            />
          }
          label="$200 - $500"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxState.checkbox4}
              onChange={handleCheckboxChange}
              name="checkbox4"
            />
          }
          label="$500 - $2.000"
        />
      </FormGroup>
    </div>
  );
}
