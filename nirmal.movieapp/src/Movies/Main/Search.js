import React, { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(searchTerm);

    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleOnSubmit}>
        <input
          type="search"
          placeholder="Search....."
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Search;
