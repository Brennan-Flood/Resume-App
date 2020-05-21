import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";

const { IS_LOGGED_IN } = Queries;



const Nav = (props) => {

  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            if (data.isLoggedIn) {
              return (
                <div className="nav">
                  <button
                    className="nav-button"
                    onClick={e => {
                      e.preventDefault();
                      localStorage.removeItem("auth-token");
                      client.writeData({ data: { isLoggedIn: false } });
                      props.history.push("/");
                      window.location.reload();
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                  <button
                    className="download-resume-button"
                    onClick={props.print}
                  >
                    <i className="fas fa-download"></i>
                  </button>

                  <button 
                  onClick={() => {props.panZoomRef.current.zoomIn(1)}}
                  >
                    <i className="fas fa-search-plus"></i>
                  </button>

                  <button
                    onClick={() => { props.panZoomRef.current.zoomOut(1) }}
                  >
                    <i className="fas fa-search-minus"></i>
                  </button>
                </div>
              );
            } else {
              return (
                <div className="nav-auth">
                  <ul className="not-logged-in">
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/register" className="nav-link">Sign up</Link></li>
                  </ul>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
}
  
export default withRouter(Nav);