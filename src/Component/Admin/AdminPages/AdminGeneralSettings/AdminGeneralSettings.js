import React from 'react'
import './AdminGeneralSettings.css'
function AdminGeneralSettings() {
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <p> General Settings </p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <p className="modal_form_para">General Informations</p>
          <span>
            <input type="text" placeholder="Website Title" />
          </span>

          <p className="modal_form_para">Favicon</p>
          <input type="file" />

          <button className="modal_form_buttom">Update Settings</button>
        </form>
      </div>
     
    </div>
  )
}

export default AdminGeneralSettings