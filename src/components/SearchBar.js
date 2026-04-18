import React, { useState } from "react";

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setSearchTerm(input);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center mb-4"
    >
      <input
        type="text"
        className="form-control w-50 rounded-pill px-4 py-2 shadow-sm"
        placeholder="Search for movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="btn btn-warning ms-2 px-4 rounded-pill fw-semibold">
        Search
      </button>
    </form>
  );
}

export default SearchBar;