import React from "react";
import "./AdminInformationCard.css";
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {  Edit } from "@mui/icons-material";
import img from "../../AdminAsset/AdminImages/Rectangle 110798.png";
function AdminInformationCard() {
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
        <p>Information Cards</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th style={{ width: "250px" }}>Image</th>
                <th>Title</th>
                <th>Sub Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="banner"
                    style={{ width: "150px", height: "80px" }}
                  />
                </td>

                <td>Support</td>
                <td style={{ width: "500px" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sit
                    enim nec, proin faucibus nibh et sagittis a. Lacinia purus
                    ac amet.
                  </p>
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
              </tr>{" "}
              <tr>
                <td>2</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="banner"
                    style={{ width: "150px", height: "80px" }}
                  />
                </td>

                <td>Sales</td>
                <td style={{ width: "500px" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sit
                    enim nec, proin faucibus nibh et sagittis a. Lacinia purus
                    ac amet.
                  </p>
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
              </tr>{" "}
              <tr>
                <td>3</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt="banner"
                    style={{ width: "150px", height: "80px" }}
                  />
                </td>

                <td>Fast Delivery</td>
                <td style={{ width: "500px" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sit
                    enim nec, proin faucibus nibh et sagittis a. Lacinia purus
                    ac amet.
                  </p>
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
      <div className="adminorderpage_pagination"></div>
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
              Add New Banner
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Title" />
              </span>
              <span>
                <input type="text" placeholder="Sub Title" />
              </span>
              <p className="modal_form_para">Image</p>

              <input type="file" />
              <button className="modal_form_buttom">Update</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminInformationCard;
