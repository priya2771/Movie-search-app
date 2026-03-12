import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");

  const API_KEY = "e7faec0f";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          // Remove duplicates
          const uniqueMovies = [
            ...new Map(
              data.Search.map((movie) => [movie.imdbID, movie]),
            ).values(),
          ];

          // Sort movies from newest to oldest
          const sortedMovies = uniqueMovies.sort(
            (a, b) => parseInt(b.Year) - parseInt(a.Year),
          );

          setMovies(sortedMovies);
        } else {
          setMovies([]);
        }
      });
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🎬 Movie Search App</h1>

      <SearchBar setSearchTerm={setSearchTerm} />

      <div className="row mt-4">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {movies.length === 0 && (
        <p className="text-center text-muted">No movies found</p>
      )}
    </div>
  );
}

export default App;
