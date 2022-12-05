import React from "react";
import { Route, Routes } from "react-router-dom";
import Update from "./Components/Update";
import Crud from "./Crud";

function CrudHeader() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default CrudHeader;
