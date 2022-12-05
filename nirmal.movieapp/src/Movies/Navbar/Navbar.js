import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SidebarData from "./SidebarData";

// export const Gobal = React.createContext();

function Navbar(props) {
  const [menubar, setMenubar] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const SidebarToggle = () => {
    setMenubar(!menubar);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(searchTerm);

    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {/* <Gobal.Provider value={{ handleOnSubmit }}> */}

      <div className="navbar">
        <Link to="#" className="menubar">
          <FaIcons.FaBars onClick={SidebarToggle} />
        </Link>
        <h3>Movies Hub</h3>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            placeholder="Search....."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>

      <nav className={menubar ? "open" : "close"}>
        <ul className="menubar-items" onClick={SidebarToggle}>
          <li className="toggle">
            <Link to="#" className="menubar">
              <AiIcons.AiOutlineClose onClick={SidebarToggle} />
            </Link>
          </li>

          <SidebarData />
        </ul>
      </nav>

      {/* </Gobal.Provider> */}
    </>
  );
}

export default Navbar;
