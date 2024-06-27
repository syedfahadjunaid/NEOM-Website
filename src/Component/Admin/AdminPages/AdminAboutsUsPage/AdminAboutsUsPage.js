import React, {  useRef } from "react";
import "./AdminAboutsUsPage.css";
import JoditEditor from "jodit-react";
function AdminAboutsUsPage() {
  const editor = useRef();
  // const [data, setData] = useState("");
  return (
    <div className="adminorderpage ">
      <div className="adminorderpage_heading adminabout">
        <p>About Us</p>
      </div>
      <div className="adminorderpage_table adminabout">
        <form className="modal_form">
          <span>
            <textarea
              rows={5}
              placeholder="Top  Title"
              className="textarea_modal_discription"
            />
          </span>
          <p className="modal_form_para">BG IMG</p>
          <input type="file" />
          <p className="modal_form_para">Description</p>
          <JoditEditor
            ref={editor}
            // onChange={(newContent) => setData(newContent)}
            className="jodieditor"
          />
          <p className="modal_form_para">CEO Info</p>
          <input type="file" />
          <span>
            <input type="text" placeholder="Name of the CEO" />
          </span>
          <span>
            <input type="text" placeholder="CEO Info " />
          </span>

          <p className="modal_form_para">Trusted online shopping </p>
          <input type="file" />
          <span>
            <textarea
              rows={5}
              placeholder="Trusted Online Shopping "
              className="textarea_modal_discription"
            />
          </span>
          <p className="modal_form_para">Why Choose us ? </p>
          <input type="file" />
          <span>
            <textarea
              rows={5}
              placeholder="Why  Choose us ?"
              className="textarea_modal_discription"
            />
          </span>
          <button className="modal_form_buttom">Update</button>
        </form>
      </div>
    </div>
  );
}

export default AdminAboutsUsPage;
