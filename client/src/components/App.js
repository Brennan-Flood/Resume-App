import React from 'react';
import { Query } from "react-apollo";
import Splash from "./auth/Splash";
import Main from "./main";
import Loader from "react-loader-spinner";
import '../css_index.css';


import Queries from "../graphql/queries";
const { IS_LOGGED_IN, CURRENT_USER_ID } = Queries;
class App extends React.Component {

  render() {
    return (
      
      <Query query= {IS_LOGGED_IN}> 
        {({data, error, loading }) => {
          if (error) {
            window.loaction.reload()
          }
          if (loading) {
            return (
              <div className="loading-div">
                <Loader
                  type="Circles"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}
                />
              </div>
            )
          }
          if (data.isLoggedIn ) {
            return (
              <Query query={CURRENT_USER_ID}>
                {({ data, loading, error }) => {
                  if (loading) return (
                  <div className="loading-div">
                    <Loader
                      type="Rings"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </div>
                  )
                  if (error) {window.location.reload()};
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
