import React, { Component } from "react";
import { connect } from "react-redux";
import AddPeople from "../content/people/components/AddPeople";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg text-dark fixed-top">
        <a className="navbar-brand" href="#">
          Contactbook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div
                className="text-right"
                data-toggle="tooltip"
                data-placement="right"
                title="Add new contact"
              >
                <AddPeople />
              </div>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    );
  }
  handleChange = e => {
    console.log("this.props.contact", this.props.contact.data);
    console.log(e.target.value, "onChange");

    let value = e.target.value;
    const { dispatch } = this.props;

    let filtered = this.props.contact.filter(item => {
      return item.firstName.toLowerCase().includes(e.target.value);
    });
    dispatch({ type: "FETCH_CONTACT_DONE", loading: false, contact: filtered });
  };
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(Header);
