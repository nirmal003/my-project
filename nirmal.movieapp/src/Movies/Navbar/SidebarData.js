import React from "react";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

function SideBarData() {
  const pagedata = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "pages",
    },
    {
      title: "Watchlist",
      path: "/watchlist",
      icon: <BiIcons.BiListPlus />,
      cName: "pages",
    },
    {
      title: "CartPage",
      path: "/cartpage",
      icon: <BsIcons.BsCart3 />,
      cName: "pages",
    },
    {
      title: "Trending",
      path: "/trending",
      icon: <FaIcons.FaHotjar />,
      cName: "pages",
    },
    {
      title: "Recent Movies",
      path: "/recent movies",
      icon: <RiIcons.RiHistoryFill />,
      cName: "pages",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoIcons.IoMdSettings />,
      cName: "pages",
    },
    {
      title: "Help & Feedback",
      path: "/help & feedback",
      icon: <FiIcons.FiHelpCircle />,
      cName: "pages",
    },
  ];

  return (
    <>
      {pagedata.map((page, index) => {
        return (
          <li key={index} className={page.cName}>
            <Link to={page.path}>
              {page.icon}
              <span>{page.title}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default SideBarData;
