import React from "react";

const MemberIndex = (props) => {
  return (
    <div>
      Member Index
      <ul>
        {Object.values(props.users).map((user) => {
          if (user.member && !user.admin && !user.rootAdmin) {
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

export default MemberIndex;