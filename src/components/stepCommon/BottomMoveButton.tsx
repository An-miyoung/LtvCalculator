import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { LeftSectionDisplay } from "../../types";
import { useRecoilState } from "recoil";
import { isShowError, isFileError } from "../../store/inputAtom";
import { StepBtnState } from "../../store/StepBtnAtom";

const ButtonField = styled.div`
  display: flex;
  width: 400px;
  margin: 40px auto;
  justify-content: space-between;
`;

const PrevButton = styled.button`
  width: 190px;
  height: 44px;
  background: #fafafa;
  border: 1px solid #0420bf;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  > span {
    width: 30px;
    height: 24px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #0420bf;
  }
`;

const NextButton = styled.button`
  width: 190px;
  height: 44px;
  background: #999999;
  background-color: ${(props) => props.color};
  border: 1px solid #0420bf;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  > span {
    width: 30px;
    height: 24px;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;

type displayProps = {
  display: LeftSectionDisplay;
};

function BottomMoveButton({ display }: displayProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [stepBtn, setStepBtn] = useRecoilState(StepBtnState);
  const [errorStep1, setErrorStep1] = useRecoilState(isFileError);
  const [errorStep2, setErrorStep2] = useRecoilState(isShowError);

  const setColor = () => {
    if (display.step === "1" && stepBtn[0].done) {
      return "#0420BF";
    } else if (display.step === "2" && stepBtn[1].done) {
      return "#0420BF";
    } else return "#999999";
  };

  const handleClick = () => {
    console.log("clicked");
    if (display.step === "1" && stepBtn[0].done) {
      navigate("/ltvCal/input");
    } else if (display.step === "1" && !stepBtn[0].done) {
      setErrorStep1(true);
    } else if (display.step === "2" && stepBtn[1].done) {
      console.log(display.step);
      console.log(stepBtn[1].done);
      setErrorStep2(false);
      navigate("/ltvCal/result");
    } else setErrorStep2(true);
  };

  return (
    <div>
      <ButtonField>
        <PrevButton>
          <span>이전</span>
        </PrevButton>
        <NextButton onClick={handleClick} color={setColor()}>
          <span>다음</span>
        </NextButton>
      </ButtonField>
    </div>
  );
}

export default BottomMoveButton;
