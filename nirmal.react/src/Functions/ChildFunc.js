import React, { useState } from "react";

function ChildFunc(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.Submit(searchTerm);

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

export default ChildFunc;
