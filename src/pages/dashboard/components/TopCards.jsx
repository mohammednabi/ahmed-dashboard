import React from "react";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

const TopCards = () => {
  // const cards = [{label:"",value:"",icon:<FaMoneyBillWave />,color:"",background:""}]

  return (
    <>
      <div className="dashboard-card top-card ">
        <div className="flex w-16 h-16 text-3xl items-center justify-center p-3 rounded-full bg-violet-100 text-violet-400">
          <FaMoneyBillWave />
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <h3 className="text-gray-900 text-2xl font-bold">$215M</h3>
          <p className="text-gray-400 text-sm">Revenues</p>
        </div>
      </div>

      <div className="dashboard-card top-card">
        <div className="flex w-16 h-16 text-3xl items-center justify-center p-3 rounded-full bg-blue-100 text-blue-400">
          <GrMoney />
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <h3 className="text-gray-900 text-2xl font-bold">$107M</h3>
          <p className="text-gray-400 text-sm">Net Profit</p>
        </div>
      </div>

      <div className="dashboard-card top-card">
        <div className="flex w-16 h-16 text-3xl items-center justify-center p-3 rounded-full bg-red-100 text-red-400">
          <RiShoppingBasket2Line />
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <h3 className="text-gray-900 text-2xl font-bold">$88K</h3>
          <p className="text-gray-400 text-sm">Orders</p>
        </div>
      </div>

      <div className="dashboard-card top-card">
        <div className="flex w-16 h-16 text-3xl items-center justify-center p-3 rounded-full bg-orange-100 text-orange-400">
          <HiMiniPresentationChartLine />
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <h3 className="text-gray-900 text-2xl font-bold">$377</h3>
          <p className="text-gray-400 text-sm">Avg Profit</p>
        </div>
      </div>
    </>
  );
};

export default TopCards;
