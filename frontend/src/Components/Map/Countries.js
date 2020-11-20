import React from "react";
import Country from "./Сountry";

function Countries(props) {
  return (
    props.countries &&
    props.countries.map((country) => (
      <Country country={country} key={country} />
    ))
  );
}

export default Countries;
