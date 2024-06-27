import React from "react";
import "./CustomPagination.css";
import { Pagination } from "@mui/material";
function CustomPagination() {
  return (
    <div className="custompagination">
      <Pagination count={10} shape="rounded" style={{display:'block'}}/>
    </div>
  );
}

export default CustomPagination;
