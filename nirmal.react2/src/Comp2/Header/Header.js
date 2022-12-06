import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About";
import History from "../History";
import Home from "../Home";
import Login from "../Login";
import Logout from "../Logout";
import Navmenu from "../Navmenu";
import Settings from "../Settings";
import Watchlist from "../Watchlist";

function Header() {
  return (
    <div>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Header;
