import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  userInputState,
  isShowError,
  whichIsError,
} from "../../../store/inputAtom";
import styled from "styled-components";

const Input = styled.input`
  width: 272px;
  height: 54px;
  padding-left: 10px;
  margin-bottom: 5px;
  border: none;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  box-sizing: border-box;
  cursor: pointer;
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

const DataInput: React.FC<{ id: string }> = ({ id }) => {
  const [userInput, setUserInput] = useRecoilState(userInputState);
  const errorCheck = useRecoilValue(isShowError);

  const errorList = useRecoilValue(whichIsError);
  console.log(errorList);

  let errorCompare;
  errorList.map((error: any) => {
    if (error === id) {
      errorCompare = true;
    }
  });

  const onSubmit = (data: any) => {
    setUserInput({
      ...userInput,
      [id]: data.data,
    });
  };

  const onChange = (e: any) => {
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
  };
  console.log(userInput[id]);

  return (
    <form>
      {errorCheck && errorCompare ? (
        <>
          <Input
            type="text"
            onChange={onChange}
            style={{ border: "1px solid red" }}
          />
          <img
            src={require("../../../assets/errorWarning.png")}
            alt="error warning"
          />
          <ErrorSpan>필수 입력 항목입니다.</ErrorSpan>
        </>
      ) : (
        <Input type="text" onChange={onChange} />
      )}
    </form>
  );
};

export default DataInput;
