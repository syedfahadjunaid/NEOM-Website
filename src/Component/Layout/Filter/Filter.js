import React, { useState } from "react";
import "./Filter.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Filter() {
  const [value, setValue] = useState(500);
  const history = useNavigate();
  console.log(value);
  return (
    <div className="filter">
      <span>
        <p> Price Range</p>
        {value}
      </span>

      <input
        type="range"
        min={0}
        max={5000}
        value={value}
        step={100}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="filter_category">
        <span>
          <p>Categories</p> <KeyboardArrowDown />
        </span>
        <div>
          <span>
            <input type="checkbox" />
            <p onClick={() => history(`/product/Neom Wheat`)}>Neom Atta</p>
          </span>
          <span>
            <input type="checkbox" />
            <p onClick={() => history("/product/Neom Organic Mustard Oil")}>Neom Musturd Oil</p>
          </span>
          <span>
            <input type="checkbox" />
            <p onClick={() => history("/product/Neom Daliya")}>Neom Daliya</p>
          </span>{" "}
          <span>
            <input type="checkbox" />
            <p onClick={() => history("/product/Neom Soya Chunks")}>Neom Soya Chunks</p>
          </span>
          <span>
            <input type="checkbox" />
            <p onClick={() => history("/product/Neom Pasta")}>Neom Pasta</p>
          </span>
        </div>
      </div>
      <div className="filter_size">
        <p>Select Size</p>
        <span>
          <p style={{ cursor: "not-allowed" }}>5KG</p>
          <p style={{ cursor: "not-allowed" }}>10KG</p>
          <p style={{ cursor: "not-allowed" }}>15KG</p>
          <p style={{ cursor: "not-allowed" }}>20KG</p>
        </span>
      </div>
    </div>
  );
}

export default Filter;
