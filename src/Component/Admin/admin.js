import React from "react";
import { useState } from "react";
import AdminLogin from "./AdminLayout/AdminLogin/AdminLogin";
import AdminHomepage from './AdminPages/AdminHomePage/AdminHomePage'

function Admin() {
  const [login, setLogin] = useState(false);
  return <div style={{width:'100%'}}>
    { login ? <AdminHomepage/> : <AdminLogin setLogin={setLogin}/> }
  </div>;
}

export default Admin;
