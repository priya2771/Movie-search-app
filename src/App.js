import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");
  const [loading, setLoading] = useState(false);

  const API_KEY = "e7faec0f";

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          const uniqueMovies = [
            ...new Map(
              data.Search.map((movie) => [movie.imdbID, movie])
            ).values(),
          ];

          const sortedMovies = uniqueMovies.sort(
            (a, b) => parseInt(b.Year) - parseInt(a.Year)
          );

          setMovies(sortedMovies);
        } else {
          setMovies([]);
        }
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="bg-dark min-vh-100 text-white">
      
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-black px-4">
        <span className="navbar-brand fw-bold">🎬 Movie Explorer</span>
      </nav>

      <div className="container py-4">
        
        <SearchBar setSearchTerm={setSearchTerm} />

        {loading && (
          <p className="text-center mt-4 fs-5">Loading movies...</p>
        )}

        <div className="row mt-4">
          {movies.map((movie) => (
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4"
              key={movie.imdbID}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {!loading && movies.length === 0 && (
          <p className="text-center text-secondary fs-5 mt-4">
            🎥 No movies found. Try another search!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;