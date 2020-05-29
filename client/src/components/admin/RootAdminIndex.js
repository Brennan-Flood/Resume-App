import React from "react";

const RootAdminIndex = (props) => {
  return (
    <div className="user-index">
      <ul className="user-list">
        {Object.values(props.users).map((user) => {
          if (user.member && user.rootAdmin && user.admin) {
            return (
              <div className="user-node">
                <div className="user-info">
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                </div>
              </div>
            )
          } else {
            return;
          }
        })}
      </ul>
    </div>
  )
};

export default RootAdminIndex;