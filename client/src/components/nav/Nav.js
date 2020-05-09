import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const { IS_LOGGED_IN } = Queries;

const downloadResume = function() {
  const input = document.querySelector("#capture");

  const firstName = document.querySelector(".first-name").innerHTML;
  const lastName = document.querySelector(".last-name").innerHTML;

  const fileName = lastName + "_" + firstName + "_" + "resume.pdf"
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(fileName);
    });
  ;
};

const Nav = props => {
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
                    <i class="fas fa-sign-out-alt"></i>
                </button>
                <button 
                className="download-resume-button"
                onClick={downloadResume}
                >
                    {/* <img src="public/download.png" className="nav-icon" /> */}
                    <i class="fas fa-download"></i>
                </button>
                  <div className="blurred"></div>
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
};

export default withRouter(Nav);