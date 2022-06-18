import React from "react";

function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
