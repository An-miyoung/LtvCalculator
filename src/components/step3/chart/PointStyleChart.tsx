import React from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const Container = styled.div`
  width: 658px;
  height: 212px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const PointStyleChart: React.FC = () => {
  const data = {
    labels: ["0", "10", "20", "30", "40", "50", "60"],
    datasets: [
      {
        label: "Fitted Curve",
        borderColor: "#742774",
        fill: false,
        borderWidth: 5,
        data: [10, 50, 20, 30, 10, 20, 30],
      },
    ],
  };

  return (
    <Container>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </Container>
  );
};

export default PointStyleChart;
