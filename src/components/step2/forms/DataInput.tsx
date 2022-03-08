import React, { useState, FunctionComponent, Dispatch } from "react";
import { useRecoilState } from "recoil";
import { userInputState } from "../../../store/inputAtom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { UserInputType } from "../../../types";

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
  &:focus {
    outline: none;
  }
`;
const ErrorField = styled.div`
  position: relative;
  top: -61px;
  width: 272px;
  height: 54px;
  border: 3px solid #f3694c;
  border-radius: 10px;
`;

const ErrorSpan = styled.span`
  position: relative;
  top: -61px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #f3694c;
  margin-left: 5px;
`;

type FormData = {
  data: string;
};

const DataInput: FunctionComponent<{
  // setUserInputData: Dispatch<any>;
  // userInputData: UserInputType;
  id: string;
  // }> = ({ setUserInputData, userInputData, title }) => {
}> = ({ id }) => {
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useRecoilState(userInputState);
  console.log({ userInput });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // setResult(data.data);
    setUserInput({
      ...userInput,
      [id]: data.data,
    });
    // console.log(title);
    // setUserInputData({
    //   ...userInputData,
    //   [title]: data.data,
    // });
  });

  const onChange = (e: any) => {
    console.log(e.target.value);
    // setResult(data.data);
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
    // console.log(title);
    // setUserInputData({
    //   ...userInputData,
    //   [title]: data.data,
    // });
  };

  return (
    <form>
      <Input
        type="text"
        {...register("data", {
          required: true,
        })}
        onChange={onChange}
      />
      {/* {errors.data?.type === "required" && ( */}
      {userInput?.validateFail && !userInput[id] && (
        <>
          <ErrorField />
          <ErrorSpan>필수 입력 항목입니다.</ErrorSpan>
        </>
      )}
    </form>
  );
};

export default DataInput;
