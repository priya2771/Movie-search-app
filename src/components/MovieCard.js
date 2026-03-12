import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={movie.Title}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;