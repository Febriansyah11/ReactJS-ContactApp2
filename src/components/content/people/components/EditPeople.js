import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as Service from "../service/Service";
import Swal from "sweetalert2";
import "../assets/style.css";

class EditPeople extends Component {
  constructor(props) {
    super(props);
  }

  handleInputFirstName = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    console.log(data, "ini data");

    this.props.dispatch({ type: "HANDLE_EDIT_FIRSTNAME", contact: data });
  };
  handleInputLastName = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_EDIT_LASTNAME", contact: data });
  };

  handleInputAge = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_EDIT_AGE", contact: data });
  };
  handleInputPhoto = event => {
    console.log(event.target.value, "onChange");
    let data = event.target.value;
    this.props.dispatch({ type: "HANDLE_EDIT_PHOTO", contact: data });
  };

  handleSubmit = () => {
    console.log(this.props.editContact, "sebelum dihapus");

    const { editContact, peopleId } = this.props;
    let id = peopleId; //id people
    delete editContact.id;
    console.log(id, "id People");
    console.log(editContact, "data People");
    Service.update(id, editContact).then(res => {
      window.location.reload(false)
    });
  };

  render() {
    const { editContact } = this.props;
    return (
      <Fragment>
        <div
          className="modal fade"
          id="update"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Contact
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
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="text-dark">Name</label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={this.handleInputFirstName}
                      className="form-control border-dark"
                      placeholder="firstname"
                      value={editContact.firstName}
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
                      value={editContact.lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-dark">Age</label>
                    <input
                      type="number"
                      className="form-control border-dark"
                      name="age"
                      onChange={this.handleInputAge}
                      value={editContact.age}
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
                      value={editContact.photo}
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
export default connect(mapStateToProps)(EditPeople);
