import React, { Component, Fragment } from "react";
import * as Service from "../service/Service";
import { connect } from "react-redux";
import EditPeople from "./EditPeople";
import AddPeople from "./AddPeople";
import Swal from "sweetalert2";
import "../assets/style.css";

class DetailPeople extends Component {
   constructor(props) {
    super(props);
  }
  render() {
    const { editContact } = this.props;
    console.log(editContact);
    
    return (
      <div className="row m-3">
        {editContact.age === null ? (
          <div
            className="col-12 p-3 text-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Click people to see detail"
          >
            <button type="button" class="btn">
              Click people to see detail &nbsp;
              <i class="fa fa-arrow-circle-right text-primary fa-lg"></i>
            </button>
          </div>
        ) : (
          <div className="col-12">
            <div className="row text-center people-card">
              <div className="col-lg-12 col-12">
                <img
                  className="image-logo logo"
                  src={editContact.photo}
                  alt="Card image cap"
                />
              </div>
              <div className="text col-lg-12 col-xs-12 p-2 mt-1">
                <div>First Name</div>
                <h3 className="detail-text bold">{editContact.firstName}</h3>
                <div>Last Name</div>
                <h3 className="detail-text bold">{editContact.lastName}</h3>
                <div>Age</div>
                <h3 className="detail-text bold">{editContact.age}</h3>
                <div className="row">
                  <div className="text-right col-6 btn">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => this.handleDelete(editContact.id)}
                    >
                      <i className="fa fa-trash text-danger fa-lg"></i>
                    </button>
                  </div>
                  <div className="text-left col-6 btn">
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#update"
                    >
                      <i className="fa fa-edit text-warning fa-lg"></i>
                    </button>
                    <EditPeople />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Service.deleteContact(id)
          .then(res => {
            console.log(res, "ini response");
            if (res.status === 201) {
              Swal.fire("Deleted!", "Contact has been deleted.", "success");
            }
          })
          .catch(error => {
            console.log(error.response, "response error");
            if (error.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.response.data.message}`
              });
            }
          });
      }
    });
  };
}

function mapStateToProps(state) {
  return { ...state};
}
export default connect(mapStateToProps)(DetailPeople);
