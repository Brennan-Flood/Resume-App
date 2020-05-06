import React from "react";
import { Link } from "react-router-dom"

class SplashGraphic extends React.Component {

  render() {
    return (
      <div>
        This is the splash SplashGraphic
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </div>
    )
  }
}

export default SplashGraphic