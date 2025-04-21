import React from "react";
import SidebarNavButton from "./SidebarNavButton";
// import { FcTimeline } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";

const Sidebar = () => {
  const navs = [
    { label: "Dashboard", icon: <FcComboChart />, path: "/dashboard" },
    { label: "Clients", icon: <FcBusinessman />, path: "/clients" },
    { label: "Revenues", icon: <FcMoneyTransfer />, path: "/revenues" },
    { label: "Settings", icon: <FcEngineering />, path: "/settings" },
  ];

  return (
    <>
      <div className="h-screen bg-white shadow-2xl flex flex-col gap-5">
        <div className="flex flex-col  w-full">
          <p className="text-3xl text-stone-900 text-center font-bold mt-5">
            LOGO
          </p>
          <p className="text-lg leading-none  text-pink-800 text-center ">
            Into the future
          </p>
        </div>

        <div className="p-2 flex flex-col gap-3 w-full">
          {navs.map((item) => (
            <SidebarNavButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
