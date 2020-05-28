import React from 'react';
import { Query } from "react-apollo";
import Splash from "./auth/Splash";
import Main from "./main";
import Builder from "./builder/Builder";
import Pending from "./pending/Pending";
import '../css_index.css';


import Queries from "../graphql/queries";
const { IS_LOGGED_IN, IS_USER_MEMBER, CURRENT_USER_ID, CURRENT_USER_INFO } = Queries;
class App extends React.Component {

  render() {
    return (
      
      <Query query= {IS_LOGGED_IN}> 
        {({data }) => {
          if (data.isLoggedIn ) {
            console.log(this.props.currentUserId)
            return (
              <Query query={CURRENT_USER_ID}>
                {({ data, loading, error }) => {
                  console.log(data);
                  if (loading) return <div>loading</div>
                  if (error) return <div>error</div>
                  return (
                    <Main currentUserId={data.currentUserId}/>
                  )}}
              </Query>
              
            )
          } else {
            return (
              <div>
                <Splash />
              </div> 
            )
          }
        }}
      </Query> 
    )
  }
}

export default App;
