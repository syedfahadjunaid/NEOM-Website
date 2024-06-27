import React from "react";
import "./AdminProductAds.css";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import img from "../../AdminAsset/AdminImages/Rectangle 110798.png";
import { useState } from "react";
function AdminProductAds() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "0px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>Home Page Ads</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Alt Tags</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="brand"
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
                <td>Product Name</td>

                <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="brand"
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
                <td>Product Name</td>

                <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="brand"
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
                <td>Product Name</td>

                <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Update Ads
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Alt Tag" />
              </span>
              <span>
                <input type="text" placeholder="Link" />
              </span>
              <input type="file" />
              <button className="modal_form_buttom">Edit Ads</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminProductAds;
