import React from "react";
import "./AdminUserTablePage.css";
import { Search } from "@mui/icons-material";
function AdminUserTablePage() {
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <p>All User</p>
      </div>
      <div className="adminorderpage_table">
        <div className="adminorderpage_table_head allbrand_table_head">
          <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th style={{ width: "250px" }}>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Namesis</td>
                <td>Namesis@gmail.com</td>
                <td>+91 123456789</td>
                <td>Lucknow,225006</td>
              </tr>
              <tr>
                <td>2</td>
                <td style={{ width: "250px" }}>Namesis</td>
                <td>Namesis@gmail.com</td>
                <td>+91 123456789</td>
                <td>Lucknow,225006</td>
              </tr>
              <tr>
                <td>3</td>
                <td style={{ width: "250px" }}>Namesis</td>
                <td>Namesis@gmail.com</td>
                <td>+91 123456789</td>
                <td>Lucknow,225006</td>
              </tr>
              <tr>
                <td>4</td>
                <td style={{ width: "250px" }}>Namesis</td>
                <td>Namesis@gmail.com</td>
                <td>+91 123456789</td>
                <td>Lucknow,225006</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination"></div>
    </div>
  );
}

export default AdminUserTablePage;
