import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { UserInputType } from "../../types";
import useDisplayState from "../../hooks/useDisplayContext";
import LtvResultInput from "./LtvResultInput";

const Container = styled.div`
  width: 980px;
  height: 745px;
`;

const FlexContiner = styled.div`
  display: flex;
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
  const [userInputData, setUserInputData] = useState<UserInputType>({});
  const displayContext = useDisplayState();

  return (
    <Container>
      <FlexContiner>
        <Graph>
          <h1>GRAPH</h1>
        </Graph>
        <LtvResultInput />
      </FlexContiner>
      <FlexContiner></FlexContiner>
    </Container>
  );
};

export default LtvStep3;
