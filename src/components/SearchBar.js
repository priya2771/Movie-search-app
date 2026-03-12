import React, { useState } from "react";

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchBar;