import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import NavBar from "../components/NavBar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName="Juan"
                  lastName="Camilo"
                  twitter="camilo_garcesv"
                  jobTitle="Frontend Engineer"
                  avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                />
              </div>
              <div className="col-6">
                <BadgeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
