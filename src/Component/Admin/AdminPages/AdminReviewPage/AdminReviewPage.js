import { Visibility } from '@mui/icons-material';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import React, {  useState } from "react";
import img from '../../AdminAsset/AdminImages/Rectangle 110798.png'
function AdminReviewPage() {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900,
        bgcolor: "background.paper",
        border: "2px solid #fff",
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
        
            <p>Reviews</p>
          </div>
          <div className="adminorderpage_table">
            <div className="adminorderpage_table_table">
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name of the User</th>
                    <th>Img</th>
                    <th style={{ width: "250px" }}>Text </th>
                    <th>Published</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nemesis</td>
    
                    <td>
                      <img
                        src={img}
                        alt="brand"
                        style={{ width1: "100px", height: "50px" }}
                      />
                    </td>
                    <td style={{ width: "250px" }}>
                      She had a beautiful gold necklace, one that glittered in the
                      light. It was a precious heirloom, handed down from her.
                    </td>
                    <td>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <Visibility
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
                  User Review
                </Typography>
                <form className="modal_form">
                  <span>
                    <input type="text" placeholder="Name" />
                  </span>
                  <span>
                  <textarea rows={10} placeholder="Review" style={{width:'100%',border:'none',outline:'none',paddingLeft:'10px',paddingTop:'10px'}}/>
                  </span>
                  {/* <span>
                   
                    <select>
                      <option>Select Brand</option>
                      <option>BlueStone</option>
                      <option>BlueStone</option>
                      <option>BlueStone</option>
                      <option>BlueStone</option>
                    </select>
                  </span> */}
                  <p className="modal_form_para">Images</p>

                </form>
              </Box>
            </Fade>
          </Modal>
        </div>
      );
}

export default AdminReviewPage