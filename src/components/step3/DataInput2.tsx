import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { resultInputState } from "../../store/inputAtom";
import styled from "styled-components";

const Input = styled.input`
  width: 220px;
  height: 44px;
  margin-right: 20px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #7e84a8;
  border: none;
  background: #fafafa;
  border-radius: 6px;
  border-bottom: 1px solid #c0c0c0;
  opacity: 1;
  &::placeholder {
    padding-left: 10px;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    color: #0420bf;
    opacity: 0.4;
  }
`;

const DataInput: React.FC<{ id: string }> = ({ id }) => {
  const [input, setInput] = useState(0);
  const [userInput, setUserInput] = useRecoilState(resultInputState);

  let placeholderT = "";

  if (id === "arpu") placeholderT = "10,000원";
  else if (id === "cac") placeholderT = "0원";
  else placeholderT = "0명";

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
    // setInput(0);
  };
  console.log(userInput);

  return (
    <form>
      <Input type="text" onChange={onChange} value={userInput[id]} />
    </form>
  );
};

export default DataInput;
