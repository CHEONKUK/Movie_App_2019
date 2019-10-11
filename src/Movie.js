import React from "react";
import propType from "prop-types";
import "./css/Movie_CSS.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propType = {
  id: propType.number.isRequired,
  year: propType.number.isRequired,
  title: propType.string.isRequired,
  summary: propType.string.isRequired,
  poster: propType.string.isRequired,
  genres: propType.arrayOf(propType.string).isRequired
};

export default Movie;
