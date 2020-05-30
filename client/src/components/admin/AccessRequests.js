import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { TOGGLE_USER_MEMBERSHIP } = Mutations;

const AccessRequests = (props) => {

  const toggleMembership = (toggleUserMembership, userId) => {
    toggleUserMembership({
      variables: {
        id: userId
      }}
    )
  }

  const updateCache = (cache, data) => {
  }

  return (
    <div className="user-index">
      <Mutation mutation={TOGGLE_USER_MEMBERSHIP} update={(cache, data) => updateCache(cache, data)} >
        {(toggleUserMembership, {data}) => {
          return (
            <ul className="user-list">
              {Object.values(props.users).map((user, i) => {
                if (!user.member) {
                  return (
                    <div className="user-node" key={i}>
                      <div className="user-info">
                      <h1>{user.name}</h1>
                      <h1>{user.email}</h1>
                      </div>
                      { props.user.admin && <button onClick={e => toggleMembership(toggleUserMembership, user._id)}>Accept User</button> }
                    </div>

                  )
                } else {
                  return;
                }
              })}
            </ul>
          )
        }}
        
      </Mutation>
    </div>
  )
};

export default AccessRequests;