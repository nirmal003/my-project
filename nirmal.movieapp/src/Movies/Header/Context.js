import React, { createContext, useEffect, useState } from "react";

export const WatchList = createContext();
export const Cart = createContext();

const watchListFromLocalStorage = JSON.parse(
  localStorage.getItem("watchList") || []
);

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || []);

function Context({ children }) {
  //  gobal state created here only

  //  and children comes from App components

  const [watchList, setWatchList] = useState(watchListFromLocalStorage);
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    watchList && localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Cart.Provider value={{ cart, setCart }}>
      <WatchList.Provider value={{ watchList, setWatchList }}>
        {children}
      </WatchList.Provider>
    </Cart.Provider>
  );
}

export default Context;
