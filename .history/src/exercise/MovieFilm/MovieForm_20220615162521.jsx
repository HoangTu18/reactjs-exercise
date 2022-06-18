import React from "react";

function MovieForm(props) {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <h1>Movie Film</h1>
      Name <input type="text" />
      <button>Add</button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default MovieForm;
