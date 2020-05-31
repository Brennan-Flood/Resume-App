import React from 'react';
import { Query } from "react-apollo";
import Splash from "./auth/Splash";
import Main from "./main";
import Loader from "react-loader-spinner";
import '../css_index.css';


import Queries from "../graphql/queries";
const { IS_LOGGED_IN, CURRENT_USER_ID } = Queries;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.loader = this.loader.bind(this);
  }
  loader() {
    return (
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
  }
  render() {
    return (
      
      <Query query= {IS_LOGGED_IN}> 
        {({data, error, loading }) => {
          if (error) {
            window.loaction.reload()
            return this.loader();
          }
          if (loading) {
            return this.loader()
          }
          if (data.isLoggedIn ) {
            return (
              <Query query={CURRENT_USER_ID}>
                {({ data, loading, error }) => {
                  if (loading) return this.loader();
                  if (error) {
                    window.location.reload()
                    return this.loader();
                  };
                  return (
                    <Main loader={this.loader} currentUserId={data.currentUserId}/>
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
