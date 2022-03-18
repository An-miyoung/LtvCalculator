import React, { useState } from "react";
import styled from "styled-components";
import GraphGaugeChart from "./chart/GraphGaugeChart";
import PointStyleChart from "./chart/PointStyleChart";
import LtvInsight from "./LtvInsight";
import ModalShow from "../stepCommon/modal/ModalShow";

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
          <div style={{ display: "flex" }}>
            <ChartTitle>Unicorn Index</ChartTitle>
            <ModalShow
              type="single"
              modalTitle1={"Unicorn Index란?"}
              descripton1={
                "대부분의 VC에 따르면 이값은 4~5배입니다. 3배정도는 괜찮지만 이 3배는 수억개의 수익을 창출할 때 1.5~2배로 빠르게 압축됩니다."
              }
              top={"0px"}
              left={"0px"}
            />
          </div>
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
