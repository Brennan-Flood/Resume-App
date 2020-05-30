import React from "react";
import { Link } from "react-router-dom";

class AdminNav extends React.Component {
  constructor(props) {
    super(props);

    this.getClass = this.getClass.bind(this);
  }

  getClass(field) {
    let className;
    if (window.location.href.includes(field)) {
      className = "admin-link selected";
    } else {
      className = "admin-link"
    }
    return className;
  }

  render() {
  return (
    <div className="admin-nav">
      <Link to="/"> <i className="fas fa-long-arrow-alt-left home-button" style={{fontSize: "30px"}}></i> </Link>
      <Link to="/admin/requests" className={this.getClass("requests")}> Requests </Link>
      <Link to="/admin/members" className={this.getClass("members")}> Members </Link>
      <Link to="/admin/admins" className={this.getClass("/admins")}> Admins </Link>
      <Link to="/admin/root_admins" className={this.getClass("root")}> Root Admins </Link>
    </div>
  )
  }
};

export default AdminNav;