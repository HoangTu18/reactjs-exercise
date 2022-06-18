import React, { useState } from "react";

function MovieForm(props) {
  const { movies } = props;
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <h1>Movie Film</h1>
      Name <input type="text" />
      <button>Add</button>
    </div>
  );
}

export default MovieForm;
