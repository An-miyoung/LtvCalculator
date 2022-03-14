import React, { useState } from "react";
import styled from "styled-components";
import GraphGaugeChart from "./chart/GraphGaugeChart";
import PointStyleChart from "./chart/PointStyleChart";
import LtvInsight from "./LtvInsight";

const FlexContiner = styled.div`
  display: flex;
  padding: 35px 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const ChartTitle = styled.span`
  display: block;
  width: 124px;
  height: 27px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #424242;
`;
const GraphContainer = styled.div``;

const Graph = styled.div`
  width: 280px;
  height: 212px;
  padding-top: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
`;

const ChartContiner = styled.div``;

const LtvChart: React.FC = () => {
  return (
    <>
      <FlexContiner>
        <GraphContainer>
          <ChartTitle>Unicorn Index</ChartTitle>
          <Graph>
            <GraphGaugeChart />
          </Graph>
        </GraphContainer>
        <ChartContiner>
          <ChartTitle>LTV Result</ChartTitle>
          <PointStyleChart />
        </ChartContiner>
      </FlexContiner>
      <LtvInsight />
    </>
  );
};

export default LtvChart;
