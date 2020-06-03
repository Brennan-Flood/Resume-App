import React from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminNav from "./AdminNav";
import AdminIndex from "./AdminIndex";
import MemberIndex from "./MemberIndex";
import RootAdminIndex from "./RootAdminIndex";
import AccessRequests from "./AccessRequests";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_USERS } = Queries;

class AdminMain extends React.Component {
  render() {
    return (
      
        <Query query={FETCH_USERS}> 
          {({ data, loading, error }) => {
            if (loading) return (
                <div className="loading-div">
                  <Loader
                    type="ThreeDots"
                    color="black"
                    height={300}
                    width={300}
                    timeout={3000}
                  />
                </div>
            )
            if (error) return <div> error </div>
            return (
              <div className="admin-main">
                <AdminNav />
                <Switch>
                  <Route path="/admin/requests" render={props => <AccessRequests users={data.users} user={this.props.user} />} />
                  <Route path="/admin/members" render={props => <MemberIndex users={data.users} user={this.props.user} />} /> 
                  <Route path="/admin/admins" render={props => <AdminIndex users={data.users} user={this.props.user}/>} />
                  <Route path="/admin/root_admins" render={props => <RootAdminIndex users={data.users} user={this.props.user} />} />
                </Switch>

              </div>
            )
          }}
        </Query>
      
    )
  }
}

export default AdminMain;