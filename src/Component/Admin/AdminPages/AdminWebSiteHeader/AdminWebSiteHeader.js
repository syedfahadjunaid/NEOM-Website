import React from 'react'
import './AdminWebSiteHeader.css'
function AdminWebSiteHeader() {
      return (
        <div className="adminorderpage ">
          <div className="adminorderpage_heading adminabout">
            <p> Website header </p>
          </div>
          <div className="adminorderpage_table adminabout">
            <form className="modal_form">
              <p className="modal_form_para">Navbar Logo</p>
              <input type="file" />
             <button className="modal_form_buttom">Update NavBar</button>
            </form>
          </div>
      
                 
         
        </div>
      );
}

export default AdminWebSiteHeader