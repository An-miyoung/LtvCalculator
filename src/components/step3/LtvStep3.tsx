import React, { useState } from "react";
import styled from "styled-components";
import LtvResultInput from "./LtvResultInput";
import ModalShare from "../stepCommon/modal/ModalShare";
import LtvChart from "./LtvChart";

const Container = styled.div`
  position: relative;
  width: 980px;
  height: 100%;
`;

const FlexContiner = styled.div`
  display: flex;
`;

const PowerBtn = styled.button`
  margin-top: 65px;
  width: 80px;
  height: 30px;
  background: #f3694c;
  border-radius: 8px;
  border: none;

  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  color: #fafafa;
`;

const ExponentialBtn = styled.button`
  margin-top: 65px;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #8c8c8c;

  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  color: #8c8c8c;
`;

const LtvChartContainer = styled.div`
  width: 980px;
  height: 880px;
  background: #f5f5f5;
  border-radius: 0px 0px 8px 8px;
`;

const TabContainer = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 50px; ;
`;

const TabBtn = styled.button<tabProps>`
  width: 490px;
  height: 50px;
  padding-top: 10px;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  background: ${(props) => (props.isActive ? "#4A73F3" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
`;

const ShareBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 500px;
  left: -200px;
  margin-top: 95px;
  margin-left: -5px;
`;

type tabProps = {
  readonly isActive?: boolean;
};

const LtvStep3: React.FC = () => {
  const [clicked, setClicked] = useState(0);
  const [input, setInput] = useState({ arpu: "", cac: "", 회원수: "" });

  const displayDesc = ["LTV 결과", "Growth 결과"];

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setInput({ ...input, arpu: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  const clickBtnHandler = (e: any, clickedIndex: number) => {
    setClicked(clickedIndex);
  };

  return (
    <Container>
      <FlexContiner style={{ width: "170px", justifyContent: "space-between" }}>
        <PowerBtn>Power</PowerBtn>
        <ExponentialBtn>Exponential</ExponentialBtn>
      </FlexContiner>
      <LtvResultInput />
      <TabContainer>
        {displayDesc.map((display, index) => (
          <TabBtn
            key={index}
            isActive={index === clicked}
            onClick={(e) => clickBtnHandler(e, index)}
          >
            <span>{displayDesc[index]}</span>
          </TabBtn>
        ))}
      </TabContainer>
      {clicked === 0 ? (
        <LtvChartContainer>
          <LtvChart />
        </LtvChartContainer>
      ) : (
        <div>
          <h1>준비중</h1>
        </div>
      )}

      <ShareBtn>
        <ModalShare />
      </ShareBtn>
    </Container>
  );
};

export default LtvStep3;
