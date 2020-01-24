import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as Service from "../service/Service";
import Swal from "sweetalert2";
import "../assets/style.css";

class AddPeople extends Component {
  constructor(props) {
    super(props);
  }

  handleInputFirstName = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    console.log(data, "ini data");
    this.props.dispatch({ type: "HANDLE_FIRSTNAME", contact: data });
  };
  handleInputLastName = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_LASTNAME", contact: data });
  };

  handleInputAge = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_AGE", contact: data });
  };
  handleInputPhoto = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_PHOTO", contact: data });
  };

  handleSubmit = () => {
    console.log("this.props", this.props);
    const { addContact, reload } = this.props;
    console.log("reload", reload);
    console.log(addContact, "onSubmit");
    Service.post(addContact).then(res => {
      window.location.reload(false)})
    };

  render() {
    return (
      <Fragment>
        <button
          type="button"
          class="btn"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i className="fa fa-user-plus text-primary add-font fa-lg"></i>
        </button>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-backdrop="false"

        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body  text-left">
                <form>
                  <div className="form-group">
                    <label className="text-dark">Name</label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={this.handleInputFirstName}
                      className="form-control border-dark"
                      placeholder="firstname"
                      value={this.props.addContact.firstName}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark">Last Name</label>
                    <input
                      type="text"
                      className="form-control border-dark"
                      name="lastName"
                      onChange={this.handleInputLastName}
                      placeholder="lastname"
                      value={this.props.addContact.lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark">Age</label>
                    <input
                      type="number"
                      className="form-control border-dark"
                      name="age"
                      onChange={this.handleInputAge}
                      value={this.props.addContact.age}
                      placeholder="age"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark">Photo</label>
                    <input
                      type="text"
                      className="form-control border-dark"
                      name="photo"
                      onChange={this.handleInputPhoto}
                      placeholder="you photo url"
                      value={this.props.addContact.photo}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={this.handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(AddPeople);
