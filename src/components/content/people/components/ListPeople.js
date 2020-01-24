import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import * as Service from "../service/Service";
import avatar from "../assets/image/avatar_sm.png";
import { connect } from "react-redux";
import AddPeople from "./AddPeople";
import equal from "fast-deep-equal";
import "../assets/style.css";

class ListPeople extends Component {
  constructor(props) {
    super(props);
  }

  contactFetch() {
    const { dispatch, loading } = this.props;
    if (loading) {
      dispatch({ type: "FETCH_CONTACT" });
      Service.getContact()
        .then(response => {
          dispatch({
            type: "FETCH_CONTACT_DONE",
            loading: false,
            contact: response.data
          });
        })
        .catch(error => {
          dispatch({
            type: "FETCH_CONTACT_DONE",
            loading: false,
            contact: []
          });
        });
    }
  }

  componentDidMount() {
    this.contactFetch();
  }

  render() {
    const { contact, loading } = this.props;
    console.log("Ini contact :", contact);
    let data = (
      <tr>
        <td colSpan={5}>LOADING...</td>
      </tr>
    );

    if (!loading) {
      data = this.renderContact(contact);
    }
    return <div>{data}</div>;
  }

  renderContact = contact => {
    console.log(contact,"ini array");
  
    return contact.map((people, index) => {
      if (people === undefined) {
        return <div>check you signal</div>
        console.log(people);
        
      }
      return (
        <Button onClick={e => this.handleClick(people.id)}>
          <div className="row item-people">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center">
              <img className="image-people mt-2" src={people.photo} />
              {/* onError={(e) => { e.target.src = {avatar} }} */}
            </div>
            <div className="text-data col-xl-8 col-lg-4 col-md-4 col-sm-12 text-left m-auto pt-2 p-2">
              <tr>
                <th>Name</th>
                <td>
                  : {people.firstName}&nbsp;{people.lastName}
                </td>
              </tr>
              <tr>
                <th>Age</th>
                <td>: {people.age}</td>
              </tr>
            </div>
          </div>
        </Button>
      );
    });
  };

  handleClick = async id => {
    const { dispatch } = this.props;
    let people = await Service.getId(id);
    console.log("id :", people.data.id);
    console.log("data :", people.data);
    dispatch({ type: "FECTH_CONTACT_BY_ID", contact: people.data });
    dispatch({ type: "SELECTED_PEOPLE", peopleId: people.data.id });
  };
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ListPeople);
