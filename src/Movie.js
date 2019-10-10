import React from "react";
import propType from "prop-types";

function Movie({ id, year, title, symmery, poster }) {
  return <h5>{title}</h5>;
}

Movie.propType = {
  id: propType.number.isRequired,
  year: propType.number.isRequired,
  title: propType.string.isRequired,
  summery: propType.string.isRequired,
  poster: propType.string.isRequired
};

export default Movie;
