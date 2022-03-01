import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
`;

const ErrorSpan = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #f3694c;
  margin-left: 5px;
`;

type FormData = {
  data: string;
};

export default function DataInput() {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => setResult(JSON.stringify(data)));

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        {...register("data", {
          required: true,
          pattern:
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
        })}
      />
      {errors.data?.type === "required" && (
        <ErrorSpan>필수 입력 항목입니다.</ErrorSpan>
      )}
      {errors.data?.type === "pattern" && (
        <ErrorSpan style={{ color: "#F3694C" }}>
          올바른 이메일주소가 아닙니다.
        </ErrorSpan>
      )}
      <p>{result}</p>
    </form>
  );
}
