import React from "react";
import TopCards from "./components/TopCards";
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import Chart3 from "./components/Chart3";
import Chart4 from "./components/Chart4";
import Chart5 from "./components/Chart5";

const DashboardPage = () => {
  return (
    <>
      <div className="w-full h-screen grid px-16 pt-10 pb-5 grid-cols-4 grid-rows-5 gap-10">
        <TopCards />

        <Chart1 />
        <Chart3 />
        <Chart2 />
        <Chart4 />
        <Chart5 />
      </div>
    </>
  );
};

export default DashboardPage;
