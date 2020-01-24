import React, { Component } from "react";
import DetailPeople from "./components/DetailPeople";
import ListPeople from "./components/ListPeople";
import "./assets/style.css";

export default class People extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-7 people-detail">
          <DetailPeople />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-5 people p-2">
          <ListPeople />
        </div>
      </div>
    );
  }
}
