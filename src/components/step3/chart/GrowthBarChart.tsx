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

const labels = ["1천명", "5천명", "1만명", "5만명", "10만명"];

export const data = {
  labels,
  datasets: [
    {
      label: "예상 매출 증가",
      data: [2900, 3200, 4000, 6000, 7500],
      backgroundColor: "rgba(45, 89, 227, 0.5)",
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
