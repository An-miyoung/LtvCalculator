import React, { useEffect, useState, FunctionComponent, Dispatch } from "react";
import styled from "styled-components";
import { UserInputType } from "../../../types";

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

type FormData = {
  category?: CategoryEnum;
};

const CategorySelect: FunctionComponent<{
  setUserInputData: Dispatch<any>;
  userInputData: UserInputType;
}> = ({ setUserInputData, userInputData }) => {
  const [category, setCategory] = useState<FormData>({});

  const t = (e: any) => {
    const value = e.target.value;
    setCategory({ category: value });
  };

  useEffect(() => {
    setUserInputData({
      ...userInputData,
      category: category.category,
    });
  }, [category]);

  return (
    <form>
      <Select onChange={(e) => t(e)} required>
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
