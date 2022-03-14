import React from "react";
import styled from "styled-components";
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

const Container = styled.div`
  width: 500px;
  height: 290px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["현재", "개선후"];

export const data = {
  labels,
  datasets: [
    {
      label: "LTV",
      data: [2900, 4500],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "CAC",
      data: [5000, 3800],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const GrowthBarChart = () => {
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
};
export default GrowthBarChart;
