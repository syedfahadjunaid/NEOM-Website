import React, { forwardRef, useState } from 'react'
import './AdminGalleryPage.css'
import { Backdrop, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Modal, Slide, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import img from '../../AdminAsset/AdminImages/Rectangle 110798.png'
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function AdminGalleryPage() {
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
    
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [open1, setOpen1] = useState(false);
      const handleOpen1 = () => setOpen1(true);
      const handleClose1 = () => setOpen1(false);
      const [open3, setOpen3] = useState(false);
      const handleOpen3 = () => setOpen3(true);
      const handleClose3 = () => setOpen3(false);
      const [open4, setOpen4] = useState(false);
      const handleOpen4 = () => setOpen4(true);
      const handleClose4 = () => setOpen4(false);
      const [open2, setOpen2] = useState(false);
    
      const handleClickOpen = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      return (
        <div className="adminorderpage">
          <div className="adminorderpage_heading">
            <p>Gallery</p>
          </div>
          <div className="adminorderpage_table">
            <div className="adminorderpage_table_head allbrand_table_head adminwebsitebanner_button">
              <button className="addbutton" onClick={handleOpen3}>
                Add Video
              </button>
              <button className="addbutton" onClick={handleOpen}>
                Add Image
              </button>
            </div>
            <div className="adminorderpage_table_table">
                <p className='adminorderpage_table_table_para'>Image</p>
              <table>
                <thead>
                  <tr>
                    <th>S/L</th>
                    <th style={{ width: "250px" }}>IMG</th>
                    <th>Alt Tag</th>
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
                    <td>Nemesis</td>
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
                        onClick={handleOpen1}
                      />
                      <Delete
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleClickOpen}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="adminorderpage_table_table">
            <p className='adminorderpage_table_table_para'>Videos</p>
              <table>
                <thead>
                  <tr>
                    <th>S/L</th>
                    <th style={{ width: "250px" }}>Videos</th>
                    <th>Alt Tag</th>
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
                    <td>Nemesis</td>
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
                        onClick={handleOpen4}
                      />
                      <Delete
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleClickOpen}
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
                Add New Image
                </Typography>
                <form className="modal_form">
                  <span>
                  <input type="text" placeholder="Alt Tag" />
                  </span>
                  <p className="modal_form_para">Images</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Add Image</button>
                </form>
              </Box>
            </Fade>
          </Modal>
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
                Update Image
                </Typography>
                <form className="modal_form">
                  <span>
                  <input type="text" placeholder="Alt Tag" />
                  </span>
                  <p className="modal_form_para">Images</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Update Image</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open3}
            onClose={handleClose3}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open3}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Add New Video
                </Typography>
                <form className="modal_form">
                  <span>
                  <input type="text" placeholder="Alt Tag" />
                  </span>
                  <p className="modal_form_para">Video</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Add Video</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open4}
            onClose={handleClose4}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open4}>
              <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Update Video
                </Typography>
                <form className="modal_form">
                  <span>
                  <input type="text" placeholder="Alt Tag" />
                  </span>
                  <p className="modal_form_para">Video</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Update Video</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Dialog
            open={open2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Are You Sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
               This Data Will Loss Permanently.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Disagree</Button>
              <Button onClick={handleClose2}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default AdminGalleryPage