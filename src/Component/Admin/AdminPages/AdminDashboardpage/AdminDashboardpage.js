import React, { useState } from "react";
import "./AdminDashboardpage.css";
import logo from "../../AdminAsset/AdminImages/Neom-logo 1.png";
import { Visibility } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import LatestCusttomerCard from "../../AdminCards/LatestCusttomerCard/LatestCusttomerCard";
import LatestProductcard from "../../AdminCards/LatestProductcard/LatestProductcard";
import LatestUpdateCard from "../../AdminCards/LatestUpdateCard/LatestUpdateCard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
function AdminDashboardpage() {
  const data = [
    { name: "Product A", order: 400, pv: 2400, amt: 2400 },
    { name: "Product B", order: 300, pv: 2400, amt: 2400 },
    { name: "Product C", order: 100, pv: 2400, amt: 2400 },
    { name: "Product D", order: 325, pv: 2400, amt: 2400 },
    { name: "Product E", order: 600, pv: 2400, amt: 2400 },
  ];
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
  const data1 = [
    { name: "Namesis" },
    { name: "Namesis1" },
    { name: "Namesis2" },
  ];
  return (
    <div className="adminadshboards">
      <div className="adminadshboards_top">
        <div className="adminadshboards_top_card">
          <div className="adminadshboards_top_card_details">
            <p className="adminadshboards_top_card_details_para">Customers</p>
            <strong>350</strong>
            <p className="adminadshboards_top_card_details_para1">
              During 2 month
            </p>
          </div>
          <div class="circle-border">
            <div class="circle">
              <p>80%</p>
            </div>
          </div>
        </div>
        <div className="adminadshboards_top_card">
          <div className="adminadshboards_top_card_details">
            <p>Orders</p>
            <strong>650</strong>
            <p>During 2 month</p>
          </div>
          <div class="circle-border">
            <div class="circle">60%</div>
          </div>
        </div>
        <div className="adminadshboards_top_card">
          <div className="adminadshboards_top_card_details">
            <p>Cancel</p>
            <strong>350</strong>
            <p>During 2 month</p>
          </div>
          <div class="circle-border">
            <div class="circle">25%</div>
          </div>
        </div>
        <div className="adminadshboards_top_card">
          <div className="adminadshboards_top_card_details">
            <p>Visits</p>
            <strong>4000</strong>
            <p>During 2 month</p>
          </div>
          <div class="circle-border">
            <div class="circle">65%</div>
          </div>
        </div>
      </div>
      <div className="adminadshboards_second">
        <div className="adminadshboards_second_left">
          <div className="adminadshboards_second_left_top">
            <BarChart width={650} height={300} data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
              <Legend
                width={100}
                wrapperStyle={{
                  top: 40,
                  right: 20,
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #d5d5d5",
                  borderRadius: 3,
                  lineHeight: "40px",
                }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="order" fill="#8884d8" barSize={30} />
            </BarChart>
          </div>
          <div className="adminadshboards_second_left_bottom">
            <LatestUpdateCard />
            <LatestUpdateCard />
            <LatestUpdateCard />
          </div>
        </div>
        <div className="adminadshboards_second_right">
          <div className="adminadshboards_second_right_latest_order">
            <p>Latest Customer</p>
            {data1?.map((item, index) => (
              <LatestCusttomerCard title={item.name} serialNumber={index + 1} />
            ))}
          </div>
          <div className="adminadshboards_second_right_top_selling_product">
            <p className="adminadshboards_second_right_top_selling_product_para1">
              Top Selling Products
            </p>
            <p className="adminadshboards_second_right_top_selling_product_para2">
              We have listed 36 total products.
            </p>
            <LatestProductcard />
          </div>
        </div>
      </div>
      <div className="adminadshboards_third">
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
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
                  />
                </td>
              </tr>
              <tr>
                <td>#G-Store:22</td>
                <td>#G-Store:22</td>
                <td>11 May, 2023</td>
                <td>1</td>
                <td>Processing</td>
                <td>Delivered</td>
                <td>₹ 1650,50</td>
                <td>
                  <Visibility
                    style={{ color: "#6E798C" }}
                    onClick={handleOpen}
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
  );
}

export default AdminDashboardpage;
