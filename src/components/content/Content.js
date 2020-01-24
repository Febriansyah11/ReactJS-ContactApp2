import React, { Component } from "react";
import People from "./people/ContainerPeople";

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid" style={{marginTop : 56}}>
        <People/>
      </div>
    );
  }
}
