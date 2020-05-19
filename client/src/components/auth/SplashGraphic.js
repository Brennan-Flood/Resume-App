import React from "react";
import { Link } from "react-router-dom"

class SplashGraphic extends React.Component {

  render() {
    return (
      <div className="splash-content">
        <h1 className="splash-header">Welcome to the TalentSpring Resume App </h1>
        <Link to="/login"> <button className="splash-button splash-login"> Login </button> </Link>
        <Link to="/register"> <button className="splash-button splash-register"> Register </button> </Link>
      </div>
    )
  }
}

export default SplashGraphic