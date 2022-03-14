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
        yAxisId: "yAxis",
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

{
  /* <Line
        data={{
          // labels: ['01:20', '01:30', '01:40', '01:50', '01:55', '01:58'],
          labels:
            deviceMsgs && deviceMsgs.length > 0
              ? deviceMsgs.map((deviceMsg) => deviceMsg.time)
              : [""],
          datasets: [
            {
              label: "demo",
              data:
                deviceMsgs && deviceMsgs.length > 0
                  ? deviceMsgs.map(
                      (deviceMsg) => deviceMsg.msg[0].val
                    )
                  : [""], 
                  backgroundColor: "rgba(255,192,203 ,0.6)",
                  borderColor: "red",
                  borderWidth: 1,
                  fill: true,
                  borderWidth: 3,
                },
              ],
            }}
            height={400}
            width={1500}
            options={{
              maintainAspectRatio: false,
              repsonsive: true,
    
              animation: {
                duration: 0,
              },
              scales: {
                xAxes: [
                  {
                    ticks: { display: false },
                    gridLines: {
                      display: false,
                      drawBorder: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: { display: false },
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                      drawBorder: false,
                    },
                  },
                ],
              },
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false,
              },
            }}
          />          */
}
