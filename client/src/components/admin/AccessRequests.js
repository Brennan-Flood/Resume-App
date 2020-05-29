import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { TOGGLE_USER_MEMBERSHIP } = Mutations;

const AccessRequests = (props) => {

  const toggleMembership = (toggleUserMembership, userId) => {
    console.log(toggleUserMembership, userId);
    toggleUserMembership({
      variables: {
        userId: userId
      }}
    )
  }

  const updateCache = (cache, data) => {
    console.log(data);
  }

  return (
    <div>
      Access Requests
      <Mutation mutation={TOGGLE_USER_MEMBERSHIP} update={(cache, data) => updateCache(cache, data)} >
        {(toggleUserMembership, {data}) => {
          console.log(toggleUserMembership);
          return (
            <ul>
              {Object.values(props.users).map((user, i) => {
                if (!user.member) {
                  return (
                    <div key={i}>
                      <h1>{user.name}</h1>
                      <button onClick={e => toggleMembership(toggleUserMembership, user._id)}>Toggle</button>
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