import React from "react";

function MovieForm(props) {
    const [name, setName] = useState('')
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
Thuận Phạm
import React from "react";

const MoviesForm = () => {
  const [name, setName] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const createMovie = () => {
    if (name.trim().length !== 0) {
      movies.push(name);
    } else {
      alert("No movie's name");
    }
  };

  return (
    <div>
      Name <input type="text" onChange={handleChange} />
      <button type="button" onClick={createMovie}>
        ADD
      </button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesForm;