import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const { IS_LOGGED_IN } = Queries;

const PageContext = React.createContext(null);



const Nav = (props) => {
  const pageContext = useContext(PageContext);
  const { panZoomRef } = pageContext;

  const zoomIn = () => panZoomRef.current.zoomIn(2);
  const zoomOut = () => panZoomRef.current.zoomOut(2);
  const centerReset = () => {
    panZoomRef.current.autoCenter(1);
    panZoomRef.current.reset(1);
  };

  const downloadResume = (quality = 1) => {
    const input = document.querySelector("#capture");
    const firstName = document.querySelector(".first-name").innerHTML;
    const lastName = document.querySelector(".last-name").innerHTML;
    const fileName = lastName + "_" + firstName + "_resume.pdf"
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");
        console.log(canvas, imgData, pdf)
        pdf.addImage(imgData, 'PNG', 0, 0, 211, 298);
        pdf.save(fileName);
      });
    ;
  };
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
                    onClick={downloadResume}
                  >
                    <i className="fas fa-download"></i>
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
// const Nav = props => {
  
// };

export default withRouter(Nav);