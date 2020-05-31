import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Builder from "./builder/Builder";
import Pending from "./pending/Pending";
import Loader from "react-loader-spinner";
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

                <Route path="/" render={ props => <Builder user={data.user} currentUserId={props.currentUserId} />} />
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