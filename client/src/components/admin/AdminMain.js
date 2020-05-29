import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminNav from "./AdminNav";
import AdminIndex from "./AdminIndex";
import MemberIndex from "./MemberIndex";
import RootAdminIndex from "./RootAdminIndex";
import AccessRequests from "./AccessRequests";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_USERS } = Queries;
class AdminMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: {},
      members: {},
      admins: {},
      rootAdmins: {}
    }

    this.sortUsers = this.sortUsers.bind(this);
  }



  sortUsers(users) {
    let requests = {};
    let members = {};
    let admins = {};
    let rootAdmins = {};
    Object.values(users).forEach((user) => {
      if (!user.member && !user.admin && !user.rootAdmin) {
        requests[user._id] = user;
      } else if ( user.member && !user.admin && !user.rootAdmin) {
        members[user._id] = user;
      } else if (!user.rootAdmin && user.admin) {
        admins[user._id] = user;
      } else if (user.rootAdmin) {
        rootAdmins[user._id] = user;
      }
    });

  }

  render() {
    return (
      <div>
        <Query query={FETCH_USERS}> 
          {({ data, loading, error }) => {
            if (loading) return <div> loading... </div>
            if (error) return <div> error </div>
            return (
              <div>
                <AdminNav />
                <Switch>
                  <Route path="/admin/requests" render={props => <AccessRequests users={data.users} />} />
                  <Route path="/admin/members" render={props => <MemberIndex users={data.users} />}/> 
                  <Route path="/admin/admins" render={props => <AdminIndex users={data.users}/>} />
                  <Route path="/admin/root_admins" render={props => <RootAdminIndex users={data.users} />} />
                </Switch>

              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default AdminMain;