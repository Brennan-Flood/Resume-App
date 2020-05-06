import React from 'react';
import { Query } from "react-apollo";
import Splash from "./auth/Splash";
import Nav from "./nav/Nav";
import '../App.css';

import Queries from "../graphql/queries";
const { IS_LOGGED_IN } = Queries;

class App extends React.Component {

  render() {
    return (
      
      <Query query= {IS_LOGGED_IN}> 
        {({data }) => {
          if (data.isLoggedIn) {
            return (
            <div>
                You're Logged In
                <Nav></Nav>
            </div> 
            )
          } else {
            return (
              <div>
                <Splash/>
              </div> 
            )
          }
        }}
      </Query> 
    )
  }
}

export default App;
