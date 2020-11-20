import React from "react";

function Country(props) {
    return (
      <div className="card">
        <div className="card-body">
    <h5 className="card-title">Country {props.country}</h5>
        </div>
      </div>
    );
  }
  
  export default Country;