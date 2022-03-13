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
        borderWidth: 5,
        data: [33, 25, 35, 40, 38, 41, 45],
      },
    ],
  };

  return (
    <Container>
      {/* <Line data={data} style={{ height: "212px" }} /> */}
    </Container>
  );
};

export default PointStyleChart;
