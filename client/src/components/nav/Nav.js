import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";

const { IS_LOGGED_IN } = Queries;


const Nav = (props) => {
  const getLeft = () => {
    if (props.user.admin ) {
      return -375 / 2.0
    } else {
      return -309 / 2.0
    }
  }

  const collapseNav = () => {
    const nav = document.getElementById("nav");
    const navCollapse = document.getElementById("nav-collapse");
    nav.classList.toggle("collapsed");
    navCollapse.classList.toggle("collapsed");
  };

  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data, loading, error }) => {
            if (loading) return <div></div>
            if (data.isLoggedIn) {
              return (
                <div id="nav" className="nav collapsed" style={{ left: "50%", marginLeft: `${getLeft()}px` }}>
                  <button onClick={collapseNav} style={{ left: `${-getLeft() - 20}px` }} className="toggle-nav"><i id="nav-collapse" className="fas fa-caret-up nav-collapse collapsed"></i></button>
                  <button
                    className="logout-button"
                    onClick={e => {
                      e.preventDefault();
                      localStorage.removeItem("auth-token");
                      client.writeData({ data: { isLoggedIn: false } });
                      props.history.push("/");
                      window.location.reload();
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    <h1> Logout </h1>
                  </button>
                  <button
                    className="download-button"
                    onClick={props.print}
                  >
                    <i className="fas fa-download"></i>
                    <h1> Download as PDF</h1>
                  </button>

                  <button onClick={props.recenter}>
                    <i className="fas fa-expand-arrows-alt"></i>
                    <h1> Recenter Resume </h1>
                  </button>

                  <button
                    onClick={() => { props.panZoomRef.current.zoomIn(1) }}
                  >
                    <i className="fas fa-search-plus"></i>
                    <h1> Zoom IN </h1>
                  </button>

                  <button
                    onClick={() => { props.panZoomRef.current.zoomOut(1) }}
                  >
                    <i className="fas fa-search-minus"></i>
                    <h1> Zoom OUT</h1>
                  </button>
                  {(props.user.admin || props.user.rootAdmin) && <Link className="admin-button" to="/admin/requests">
                    <i className="fas fa-users"></i>
                    <h1>Admin Page</h1>
                  </Link> }
                  
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