import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const {TOGGLE_USER_ADMIN} = Mutations;


const AdminIndex = (props) => {

  const ToggleUserAdmin = (toggleUserAdmin, userId) => {
    toggleUserAdmin({
      variables: {
        id: userId
      }
    })
  }

  const updateCache = (cache, data) => {
    console.log(cache);
  }

  return (
    <div className="user-index">
      <Mutation mutation={TOGGLE_USER_ADMIN} update={(cache, data) => updateCache(cache, data)} >
        {(toggleUserAdmin, { data }) => {
          return (
          <ul className="user-list">
            {Object.values(props.users).map((user, i) => {
              if (user.member && user.admin && !user.rootAdmin) {
                return (
                  <div className="user-node" key={i}>
                    <div className="user-info">
                      <h1>{user.name}</h1>
                      <h1>{user.email}</h1>
                    </div>
                    {props.user.rootAdmin && <button onClick={e => ToggleUserAdmin(toggleUserAdmin, user._id)}> Remove Admin</button>}
                  </div>
                )
              } else {
                return;
              }
            })}
          </ul>
          )}}
      </Mutation>
    </div>
  )
}

export default AdminIndex