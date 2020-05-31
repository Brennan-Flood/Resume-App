import React from "react";

const Pending = (props) => {
  return (
    <div className="pending-div">
      <h1 className="pending">
        {`${props.user.name[0].toUpperCase() + props.user.name.slice(1)}, your account with an email adress of ${props.user.email} has not been granted membership access yet.`}
      </h1> 
      <h1 className="pending">
        Please wait for an Admin to accept your request!
      </h1>
    </div>
  )
};

export default Pending;