import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BuilderContainer from "./builder/BuilderContainer";
import Pending from "./pending/Pending";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
import AdminMain from "./admin/AdminMain";
const { CURRENT_USER_INFO } = Queries;

const Main = (props) => {
  return (
    <Query query={CURRENT_USER_INFO} variables={{ id: props.currentUserId }}>
      {({ data, loading, error }) => {
        if (loading) return props.loader();
        if (error) {
          window.location.reload();
          return props.loader();
        }
        if (!data.user) {
          window.location.reload();
          return props.loader;
        }
        if (data.user.member) {
          return (
            <div className="main">
              <Switch>
                <Route path="/admin" render={props => 
                  data.user.admin ? ( 
                  <AdminMain user={data.user} currentUserId={props.currentUserId}/> 
                  ) : (<Redirect to="/" />)  
                } 
                /> 

                <Route path="/" render={() => <BuilderContainer user={data.user} draftId={data.user.draft._id} currentUserId={props.currentUserId} />} />
              </Switch>
            </div>
              )
        } else {
           return (
              <Pending user={data.user} />
                  )
        }
                
      }}
    </Query>
  )
};

export default Main;