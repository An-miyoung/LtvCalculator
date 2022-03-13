import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  userInputState,
  isShowError,
  whichIsError,
} from "../../../store/inputAtom";

const Select = styled.select`
  width: 275px;
  height: 54px;
  margin-left: 10px;
  border: none;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ErrorSpan = styled.span`
  position: relative;
  top: 0px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #f3694c;
  margin-left: 5px;
`;

const CategorySelect: React.FC = () => {
  const [userInput, setUserInput] = useRecoilState(userInputState);
  const errorCheck = useRecoilValue(isShowError);

  const errorList = useRecoilValue(whichIsError);
  console.log(errorList);

  let errorCompare;
  errorList.map((error: any) => {
    if (error === "category") {
      errorCompare = true;
    }
  });

  const handleSelect = (e: any) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      category: value,
    });
  };

  return (
    <form>
      <Select onChange={(e) => handleSelect(e)} required>
        <option value="none">선택해주세요.</option>
        <option value="game">게임</option>
        <option value="vehicle">교통/차량서비스</option>
        <option value="finance">금융</option>
        <option value="blockChain">블록체인</option>
        <option value="health">건강</option>
        <option value="food">음식</option>
        <option value="contents">컨텐츠/미디어</option>
        <option value="retail">유통/서비스</option>
      </Select>
      {errorCheck && errorCompare ? (
        <>
          <img
            src={require("../../../assets/errorWarning.png")}
            alt="error warning"
          />
          <ErrorSpan>필수 입력 항목입니다.</ErrorSpan>
        </>
      ) : null}
    </form>
  );
};

export default CategorySelect;
