import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-[250px_1fr]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
