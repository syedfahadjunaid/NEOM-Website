import React from "react";
import "./YouMayAlsoLikeSection.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import Data from '../../data/data'
function YouMayAlsoLikeSection() {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="youmayalsolikesection">
      <div className="youmayalsolikesection_heading">
        <h3>You May Also Like</h3>
      </div>
      <div className="youmayalsolikesection_cards">
        {Data.slice(0,4)?.map((item) => (
          <ProductCard
            title={item?.title}
            image={item?.img[0]}
            price={item?.price}
            mrp={item?.mrp}
            size={item?.size}
            rating={item?.rating}
            item={item}
            setOpen={setOpen}
          />
        ))}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Successfully Added To Cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default YouMayAlsoLikeSection;
