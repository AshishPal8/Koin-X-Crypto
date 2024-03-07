import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["blue", "orange"],
      hoverOffset: 4,
    },
  ],
};
const options = {};

const DoughnutChartComponent = () => (
  <div style={{ width: "200px", height: "200px" }}>
    <Doughnut data={data} options={options} />
  </div>
);

export default DoughnutChartComponent;
