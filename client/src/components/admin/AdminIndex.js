import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";


const AdminIndex = (props) => {
  return (
    <div>
      Admin Index
      <ul>
        {Object.values(props.users).map((user) => {
          if (user.member && user.admin && !user.rootAdmin) {
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
}

export default AdminIndex