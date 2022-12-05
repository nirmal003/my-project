import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { WatchList } from "../Header/Context";
import Show from "../Main/Show";
import Navbar from "../Navbar/Navbar";
import BuyPage from "./pages/BuyPage";
import CartPage from "./pages/CartPage";
import Help from "./pages/Help";
import RecentMovies from "./pages/RecentMovies";
import Settings from "./pages/Settings";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";

function Header() {
  // const { watchList, setWatchList } = useContext(WatchList);
  const [searchTerm, setSearchTerm] = useState("");

  function getData(data) {
    console.log("get the data from child", data);

    setSearchTerm(data);
  }

  return (
    <div>
      <Navbar onSubmit={getData} />

      <Routes>
        <Route path="/" element={<Show searchTerm={searchTerm} />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/recent movies" element={<RecentMovies />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help & feedback" element={<Help />} />
        <Route path="/buypage" element={<BuyPage />} />
      </Routes>
    </div>
  );
}

export default Header;
