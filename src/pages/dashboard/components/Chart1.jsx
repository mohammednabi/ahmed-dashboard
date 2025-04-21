import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 400, 300, 800, 600, 700],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [500, 100, 300, 400, 600, 700, 800],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart1 = () => {
  return (
    <>
      <div className="dashboard-card card col-span-3">
        <div className="dashboard-card-title border-b-2 border-b-gray-200 border-solid">
          <p>Revenues & Profit</p>
        </div>
        <div className="grid grid-cols-2 w-full h-[250px]">
          <div className="p-5 w-full h-full">
            <Bar options={options} data={data} />
          </div>
          <div className="p-5 w-full h-full">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart1;
