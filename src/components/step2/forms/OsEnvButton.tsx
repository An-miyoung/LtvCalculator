import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { userInputState } from "../../../store/inputAtom";

interface BtnProps {
  readonly isActive?: boolean;
}

const OsBtnContainer = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;

const OsEnvBtn = styled.button<BtnProps>`
  width: 82px;
  height: 38px;
  border: 1px solid #4a73f3;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 6px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-align: center;
  background: ${(props) => (props.isActive ? "#4A73F3" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#4A73F3")};
`;

const OsEnvButton = () => {
  const [clicked, setClicked] = useState([false, false, false]);
  const [clickedName, setClickedName] = useState("");
  const [userInput, setUserInput] = useRecoilState(userInputState);

  const btnList = ["Android", "IOS", "Web"];

  const clickBtnHandler = (e: any, clickedIndex: number) => {
    const newClicked = clicked.map((c, index) => {
      return index === clickedIndex ? !c : false;
    });
    setClicked(newClicked);

    setUserInput({
      ...userInput,
      os: e.target.value,
    });
    setClickedName(e.target.value);
  };

  return (
    <>
      <OsBtnContainer>
        {clicked.map((c, index) =>
          clicked[index] ? (
            <OsEnvBtn
              key={index}
              isActive
              value={btnList[index]}
              onClick={(e) => {
                clickBtnHandler(e, index);
              }}
            >
              {btnList[index]}
            </OsEnvBtn>
          ) : (
            <OsEnvBtn
              key={index}
              value={btnList[index]}
              onClick={(e) => {
                clickBtnHandler(e, index);
              }}
            >
              {btnList[index]}
            </OsEnvBtn>
          )
        )}
      </OsBtnContainer>
    </>
  );
};

export default OsEnvButton;
