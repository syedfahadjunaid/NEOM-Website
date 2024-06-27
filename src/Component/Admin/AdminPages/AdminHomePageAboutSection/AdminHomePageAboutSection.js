import React from "react";
import "./AdminHomePageAboutSection.css";
function AdminHomePageAboutSection() {
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <p>About HomePage</p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <span>
            <input type="text" placeholder="Top Title" />
          </span>
          <span>
            <input type="text" placeholder="Sub Title" />
          </span>
          <span>
            <textarea
              rows="5"
              placeholder="Text"
              className="textarea_modal_discription"
            />
          </span>
          <div className="adminorderpage_table_table adminabout">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Info Text</th>
              <th>Sub-Text </th>
              <th>Number %+K  </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ width: "250px" }}>
                <input type="text" placeholder="Info Text" className="table_input_tag"/>
              </td>
              <td>
              <input type="text" placeholder="Info Text" className="table_input_tag"/>
              </td>
              <td> <input type="text" placeholder="Number %+K " className="table_input_tag"/></td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ width: "250px" }}> <input type="text" placeholder="Info Text" className="table_input_tag"/></td>
              <td>
              <input type="text" placeholder="Sub -Text " className="table_input_tag"/>
              </td>
              <td> <input type="text" placeholder="Number %+K " className="table_input_tag"/></td>
            
            </tr>
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}> <input type="text" placeholder="Info Text" className="table_input_tag"/></td>
              <td>
              <input type="text" placeholder="Sub -Text " className="table_input_tag"/>
              </td>
              <td> <input type="text" placeholder="Number %+K " className="table_input_tag"/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="modal_form_para">IMG</p>
          <input type="file" />
          <button className="modal_form_buttom">Update</button>
        </form>
      </div>
    
    </div>
  );
}

export default AdminHomePageAboutSection;
