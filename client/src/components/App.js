import React from 'react';
import { Query } from "react-apollo";
import Splash from "./auth/Splash";
import Builder from "./builder/Builder";

import '../css_index.css';


import Queries from "../graphql/queries";
const { IS_LOGGED_IN } = Queries;
class App extends React.Component {

  render() {
    return (
      
      <Query query= {IS_LOGGED_IN}> 
        {({data }) => {
          if (data.isLoggedIn) {
            return (
            <div className="main">
                <Builder/>
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
