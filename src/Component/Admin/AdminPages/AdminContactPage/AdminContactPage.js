import React, { forwardRef, useState } from 'react'
import './AdminContactPage.css'
import { Delete,  Reply } from '@mui/icons-material';
import { Backdrop, Box, Button, Dialog, DialogActions, DialogTitle, Fade, Modal, Slide, Typography } from '@mui/material';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function AdminContactPage() {
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
      const [open1, setOpen1] = useState(false);
      const handleOpen1 = () => setOpen1(true);
      const handleClose1 = () => setOpen1(false);
      return (
        <div className="adminorderpage">
          <div className="adminorderpage_heading ">
            <p>Contact Mail </p>
          </div>
          <div className="adminorderpage_table">
            <div className="adminorderpage_table_table">
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email/Phone</th>
                    <th style={{ width: "350px" }}>Message</th>
    
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Name</td>
                    <td>Nemesis</td>
                    <td style={{ width: "350px" }}> Nemesis</td>
    
                    <td>
                      <Reply
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      />
                      <Delete
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
                  User Message
                </Typography>
                <span className="modal_form_form">
                  <p>User Message Show Here</p>
                </span>
                <form className="modal_form">
                  <span style={{marginTop:'10px'}}>
                    <input type="text" placeholder="Type Your Reply Here" />
                  </span>
                 
                  <button className="modal_form_buttom">Reply</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Are You Sure To Delete ?"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose1}>Disagree</Button>
              <Button onClick={handleClose1}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default AdminContactPage