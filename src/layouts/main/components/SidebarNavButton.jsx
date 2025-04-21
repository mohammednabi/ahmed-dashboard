import React from "react";
import { Link, useLocation } from "react-router";

const SidebarNavButton = ({ label, path, icon }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Link
        to={path}
        className={`sidebar-nav ${
          pathname.endsWith(path) && "sidebar-nav-active"
        }`}
      >
        {icon}
        <p className="text-lg font-medium text-gray-700">{label}</p>
      </Link>
    </>
  );
};

export default SidebarNavButton;
