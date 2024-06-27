import React, { useState } from "react";
import "./AdminFooterPage.css";
import { Edit, Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function AdminFooterPage() {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <p> Website Footer </p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <p className="modal_form_para">Website Footer Configuration</p>
          <span>
            <input type="text" placeholder="Gmail @gmail.com" />
          </span>
          <span>
            <input type="text" placeholder="+91 123456789" />
          </span>
          <span>
            <input type="text" placeholder="Address" />
          </span>
          <p className="modal_form_para">Footer Information</p>
          <span>
            <textarea
              rows={5}
              className="textarea_modal_discription"
              placeholder="Footer Information"
            />
          </span>
          <p className="modal_form_para">Footer Logo</p>
          <input type="file" />
          <p className="modal_form_para">Copy Right Text</p>
          <span>
            <input type="text" placeholder="Copy Right Text" />
          </span>

          <button className="modal_form_buttom">Update Footer</button>
        </form>
      </div>
      <div className="adminorderpage_table_table adminabout">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Name of Links</th>
              <th>Icon </th>
              <th>links </th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ width: "250px" }}>twitter</td>
              <td>
               <Twitter/>
              </td>
              <td>twitter.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ width: "250px" }}>FaceBook</td>
              <td>
                <Facebook/>
              </td>
              <td>FaceBook.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}>Instagram</td>
              <td>
              <Instagram/>
              </td>
              <td>Instagram.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>{" "}
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}>Linkdin</td>
              <td>
               <LinkedIn/>
              </td>
              <td>linkdin.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>{" "}
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}>YouTube</td>
              <td>
               <YouTube/>
              </td>
              <td>YouTube.com/1245484</td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
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
                  onClick={handleOpen}
                />
                {/* <Delete
                      style={{
                        color: "#6E798C",
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleClickOpen}
                    /> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Icon Info
            </Typography>
            <form className="modal_form">
              <span>
                <input type="text" placeholder="Icon Link" />
              </span>

              <button className="modal_form_buttom">Add Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminFooterPage;
