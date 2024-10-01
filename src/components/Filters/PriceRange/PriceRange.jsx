import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../../context";

const minDifference = 500;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {

  const {priceRange,filterDispatch} = useFilter();

  console.log({priceRange});

  const handlePriceRange = (event,newValue,activeThumb) =>{
        if(!Array.isArray(newValue)){
          return;
        }
       if(activeThumb == 0){
        filterDispatch({
           type: "MINIMUM_PRICE",
           payload:{
                newValue,priceRange,minDifference
           }
        })
       }else{
        filterDispatch({
          type: "MAXIMUM_PRICE",
          payload:{
            newValue,priceRange,minDifference
          }
        })
       }
  }

  return (
    <div className="filter-container">
      <span className="filter-label">Price Range</span>
      <Box>
        <Slider
        
          getAriaLabel={() => "Minimun Difference"}
          value={priceRange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          onChange={handlePriceRange}
          min={100}
          max={20000}
          disableSwap 
        />
      </Box>
    </div>
  );
};
