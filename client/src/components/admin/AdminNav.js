import React from "react";
import { Link } from "react-router-dom";

const AdminNav = (props) => {
  return (
    <div>
      <Link to="/admin/requests"> Requests </Link>
      <Link to="/admin/members"> Members </Link>
      <Link to="/admin/admins"> Admins </Link>
      <Link to="/admin/root_admins"> Root Admins </Link>
    </div>
  )
};

export default AdminNav;