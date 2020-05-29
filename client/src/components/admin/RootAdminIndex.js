import React from "react";

const RootAdminIndex = (props) => {
  return (
    <div>
      Root admin index
      <ul>
        {Object.values(props.users).map((user) => {
          if (user.member && user.rootAdmin && user.admin) {
            return (
              <h1>{user.name}</h1>
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