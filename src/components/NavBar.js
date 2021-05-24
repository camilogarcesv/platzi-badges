import React from "react";
import "./styles/NavBar.css";
import logo from "../images/logo.svg";

class BadgeNew extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="fw-light">Platzi</span>
            <span className="fw-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
