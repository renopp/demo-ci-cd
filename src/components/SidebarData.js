import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Beranda",
    path: "/unitkerja-beranda",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Admin Role",
    path: "/admin-beranda",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Buat Payment Request",
    path: "/unitkerja-paymentrequest",
    icon: <IoIcons.IoMdCreate />,
    cName: "nav-text",
  },
  
  {
    title: "Sign Out",
    path: "/",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];
