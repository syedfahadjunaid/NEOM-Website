import React, {  useRef, useState } from "react";
import "./AdminPagesManage.css";
import {
  Backdrop,
  Box,
  Fade,
  List,
  Modal,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import JoditEditor from "jodit-react";
function AdminPagesManage() {
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
  const editor = useRef();
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Page’s</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>Title</th>
                <th>Page Link</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Privacy Policy</td>
                <td>https://nemesis.com/terms-conditions</td>

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
                <td style={{ width: "250px" }}>Terms & conditions</td>
                <td>https://nemesis.com/terms-conditions</td>

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
                <td style={{ width: "250px" }}>Sales & Refunds</td>
                <td>https://nemesis.com/terms-conditions</td>

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
                <td>4</td>
                <td style={{ width: "250px" }}>Legal</td>
                <td>https://nemesis.com/terms-conditions</td>

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
              Page Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Page Title" />
              </span>
              <span>
              <input type="text" placeholder="Page link" />
              </span>
              <p className="modal_form_para">Description</p>
              <JoditEditor ref={editor} />
              <button className="modal_form_buttom">Update Page</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminPagesManage;
