import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Orange", "Blue"],
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ["orange", "blue"],
      hoverOffset: 4,
    },
  ],
};

const DoughnutChartComponent = () => (
  <div style={{ width: "400px", height: "400px" }}>
    <Doughnut data={data} />
  </div>
);

export default DoughnutChartComponent;
