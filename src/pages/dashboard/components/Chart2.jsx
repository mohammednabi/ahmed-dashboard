import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [100, 200, 400, 300, 800, 600, 700],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart2 = () => {
  return (
    <>
      <div className="dashboard-card card col-span-2">
        <div className="dashboard-card-title border-b-2 border-b-gray-200 border-solid">
          <p>Profit Performance</p>
        </div>

        <div className="p-5 w-full  h-full max-h-[250px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default Chart2;
