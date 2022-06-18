import React, { useState } from "react";

function MovieForm(props) {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  //   const handleChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const createMovie = () => {
  //     if (name.trim().length !== 0) {
  //       movies.push(name);
  //     } else {
  //       alert("No movie's name");
  //     }
  //   };

  return (
    <div>
      Name <input type="text" style={{ display: "block" }} />
      <button type="button">ADD</button>
    </div>
  );
}

export default MovieForm;
