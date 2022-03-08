import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { UserInputType } from "../../../types";
import { userInputState } from "../../../store/inputAtom";

const Select = styled.select`
  width: 272px;
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

enum CategoryEnum {
  game = "game",
  vehicle = "vehicle",
  finance = "finance",
  blockchain = "blockchain",
  health = "health",
  food = "food",
  contents = "contents",
  retail = "retail",
}

const CategorySelect: React.FC = () => {
  // const [inputValue, setInputValue] = useState<UserInputType>({});
  const [userInput, setUserInput] = useRecoilState(userInputState);
  // const setCategory = useSetRecoilState(userInputState);
  console.log({ userInput });

  const handleSelect = (e: any) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      category: value,
    });
    // setInputValue({ category: value });
    // setCategory((prevState) => [...prevState, inputValue]);
  };

  // const inputList = useRecoilValue(userInputState);

  // useEffect(() => {
  //   console.log("input: ", inputValue);
  //   // setCategory((prevState) => [...prevState, inputValue]);
  //   console.log(`userInputList: ${JSON.stringify(inputList)}`);
  // }, [inputValue]);

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
    </form>
  );
};

export default CategorySelect;
