import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card movie-card bg-secondary text-white border-0 h-100">
      <div className="position-relative">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          className="card-img-top"
          alt={movie.Title}
        />

        <div className="overlay">
          <span className="badge bg-warning text-dark">{movie.Year}</span>
        </div>
      </div>

      <div className="card-body text-center">
        <h6 className="card-title fw-semibold">{movie.Title}</h6>
      </div>
    </div>
  );
}

export default MovieCard;
