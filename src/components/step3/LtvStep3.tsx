import React, { useState } from "react";
import styled from "styled-components";
import LtvResultInput from "./LtvResultInput";

const Container = styled.div`
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
  > span {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: #fafafa;
  }
`;

const ExponentialBtn = styled.button`
  margin-top: 65px;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #8c8c8c;
  > span {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: #8c8c8c;
  }
`;

const Graph = styled.div`
  width: 280px;
  height: 247px;
  margin-top: 65px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const LtvStep3: React.FC = () => {
  const [input, setInput] = useState({ arpu: "", cac: "", 회원수: "" });

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setInput({ ...input, arpu: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <Container>
      <FlexContiner style={{ width: "170px", justifyContent: "space-between" }}>
        <PowerBtn>
          <span>Power</span>
        </PowerBtn>
        <ExponentialBtn>
          <span>Exponential</span>
        </ExponentialBtn>
      </FlexContiner>
      <LtvResultInput />
      <FlexContiner>
        <Graph>
          <h2>Graph</h2>
        </Graph>
        <div>
          <h1>Chart</h1>
        </div>
      </FlexContiner>
    </Container>
  );
};

export default LtvStep3;
