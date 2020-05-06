import React from 'react';
import { Query } from "react-apollo";

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
            </div> 
            )
          } else {
            return (
              <div>
                You're NOT Logged In
              </div> 
            )
          }
        }}
      </Query> 
    )
  }
}

export default App;
