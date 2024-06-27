import React, { useState } from 'react'
import './AdminOrderPage.css'
import { AddShoppingCart, Search, Visibility } from '@mui/icons-material'
import { Backdrop, Box, Fade, FormControl, MenuItem, Modal, Select } from '@mui/material'
import logo from '../../AdminAsset/AdminImages/Neom-logo 1.png'
function AdminOrderPage() {
    const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
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
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <AddShoppingCart
          className="adminsidebar_icon"
          style={{ fontSize: "35px" }}
        />
        <p>Order</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head">
          <p>Recent Orders</p>
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Delivery Status</em>
              </MenuItem>
              <MenuItem value={10}>Order Placed </MenuItem>
              <MenuItem value={20}>Pending </MenuItem>
              <MenuItem value={30}>Processing</MenuItem>
              <MenuItem value={30}>Delivered</MenuItem>
              <MenuItem value={30}>Cancelled </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Payment Status</em>
              </MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Unpaid"}>Unpaid </MenuItem>
              <MenuItem value={"Cod"}>Cod</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Placed On</th>
                <th>Items</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}} onClick={handleOpen}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td><Visibility style={{color:'#6E798C'}}/></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination">

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
            <div className="invoice_top">
              <div className="invoice_top_left">
                <img src={logo} alt="logo" />
              </div>
              <div className="invoice_top_right">
                <p>4945 Forest Avenue, WB,10004, Somewhere</p>
                <p>646-888-6885</p>
                <p>email@email.com</p>
                <p>www.abcdefg.com</p>
              </div>
            </div>
            <div className="invoice_center">
              <div className="invoice_center_left">
                <span>
                  <p>Name</p>
                  <p>Nemesis</p>
                </span>
                <span>
                  <p>Date</p>
                  <p>27 March, 2020</p>
                </span>
              </div>
              <div className="invoice_center_right">
                <p> Billed to</p>
                <p style={{ width: "170px" }}>
                  Lucknow 3455 Geraldine Lane, HJ 226001 U.P
                </p>
              </div>
            </div>
            <div className="invoice_table">
              <div className="invoice_table_first">
                <span>
                  <p>Invoice of (₹)</p>
                  <p>₹ 4,950.00</p>
                </span>
                <span>
                  <p>Invoice number</p>
                  <p>#00261</p>
                </span>
                <span>
                  <p>Reference</p>
                  <p>INV-057</p>
                </span>
              </div>
              <div className="invoice_table_second">
                <table>
                  <thead>
                    <tr>
                      <th style={{ flex: "0.4", width: "225px" }}>
                        Item description
                      </th>
                      <th style={{ flex: "0.2", width: "100px" }}>Qty</th>
                      <th style={{ flex: "0.2", width: "100px" }}>Rate</th>
                      <th style={{ flex: "0.2", width: "100px" }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ flex: "0.4", width: "225px" }}>Item Name</td>
                      <td style={{ flex: "0.2", width: "100px" }}>01</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                    </tr>
                    <tr>
                      <td style={{ flex: "0.4", width: "225px" }}>Item Name</td>
                      <td style={{ flex: "0.2", width: "100px" }}>01</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                      <td style={{ flex: "0.2", width: "100px" }}>3,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="invoice_table_second_total">
                <div className="invoice_table_second_total_left">
                  <p>Payment Details</p>
                  <p>Paypal: example@email.com</p>
                  <p>UPI: userid@okbank</p>
                </div>
                <div className="invoice_table_second_total_right">
                  <span>Sub Total :₹ 4,500.00</span>
                  <span>GST(10%) :₹ 450.00</span>
                  <span>Total:₹ 4,950.00</span>
                </div>
              </div>
            </div>

            <div className="invoice_bottom">
              <p
                style={{
                  color: "#6F6F84",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Note
              </p>
              <p>
                Thanks for choosing to place your order with us! We appreciate
                your business and look forward to providing you with the best
                possible service. Thank you again for your order - we hope you
                enjoy your purchase!
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default AdminOrderPage