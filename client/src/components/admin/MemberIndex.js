import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { TOGGLE_USER_ADMIN } = Mutations;

const MemberIndex = (props) => {

  const ToggleUserAdmin = (toggleUserAdmin, userId) => {
    toggleUserAdmin({
      variables: {
        id: userId
      }
    })
  };

  const updateCache = (cache, data) => {
  };

  const sortMembers = (toggleUserAdmin) => {
    let memberCount = 0;
    let members = Object.values(props.users).map((user, i) => {
      if (user.member && !user.admin && !user.rootAdmin) {
        memberCount += 1
        return (
          <div className="user-node" key={i} >
            <div className="user-info">
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
            </div>
            {props.user.rootAdmin && <button onClick={e => ToggleUserAdmin(toggleUserAdmin, user._id)}> Make Admin</button>}

          </div>
        ) 
      } else {
        return null;
      }
    })

    if (memberCount === 0) {
      return (
        <div className="admin-null-div">
          <h1 className="admin-null">{"No Members to Show :("}</h1>
        </div>
      )
    } else {
      return members
    }
  };

  return (
    <div className="user-index">
      <Mutation mutation={TOGGLE_USER_ADMIN} update={(cache, data) => updateCache(cache, data)} >
        {(toggleUserAdmin, { data }) => {
          return (
        <ul className="user-list">
          {/* {Object.values(props.users).map((user, i) => {
            if (user.member && !user.admin && !user.rootAdmin) {
              return (
                <div className="user-node" key={ i } >
                  <div className="user-info">
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                  </div>
                  {props.user.rootAdmin && <button onClick={e => ToggleUserAdmin(toggleUserAdmin, user._id)}> Make Admin</button>}
                  
                </div>
              )
            } 
          })} */}
          {sortMembers(toggleUserAdmin)}
        </ul>
          )
        }}
      </Mutation>
    </div>
  )
};

export default MemberIndex;