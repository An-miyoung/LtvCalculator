import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalShow from "../stepCommon/modal/ModalShow";

const InputContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 124px;
  padding-top: 15px;
  background: #ffffff;
  box-sizing: border-box;
  span {
    font-family: "Spoqa Han Sans Neo";
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #07145a;
    box-sizing: border-box;
  }
`;

const InputField = styled.div`
  display: flex;
  height: 90px;
  margin-top: 8px;
`;

const InputBox = styled.div`
  height: 90px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 220px;
  height: 44px;
  margin-right: 20px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #7e84a8;
  border: none;
  background: #fafafa;
  border-radius: 6px;
  border-bottom: 1px solid #c0c0c0;
  &:focus {
    outline: none;
  }
`;

const InputTitle = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #4a73f3;
`;

const InputDesc = styled.div`
  margin-bottom: 5px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
`;

const Button = styled.input`
  width: 180px;
  height: 50px;
  margin-top: 45px;
  margin-left: 56px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 14px;
  line-height: 21px;
  background: #2d59e3;
  border-radius: 6px;
  color: #fff;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const LtvResultInput: React.FC = () => {
  const [input, setInput] = useState({ arpu: "", cac: "", users: "" });

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setInput({ ...input, arpu: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <InputContainer>
      <span>
        우리 회사의 사용자 1명당 매출(ARPU) , 고객획득비용(CAC) , 회원수를
        입력하세요.
        <ModalShow
          modalTitle={"ARPU 란?"}
          descripton={
            "계산된 LTV에 따라 회원 수를 늘리려면 15일동안 15,000원의 홍보비를 사용하여 15,000명의 사용자를 지속적으로 유입시켜야 합니다."
          }
          top={"-165px"}
          left={"340px"}
        />
      </span>
      <InputField>
        <InputBox>
          <InputTitle>ARPU</InputTitle>
          <InputDesc>일 사용자 1명당 매출</InputDesc>
          <form onSubmit={handleSubmit}>
            <Input name="arpu" onChange={handleChange} />
          </form>
        </InputBox>
        <InputBox>
          <InputTitle>CAC</InputTitle>
          <InputDesc>고객 획득 비용</InputDesc>
          <form onSubmit={handleSubmit}>
            <Input name="cac" onChange={handleChange} />
          </form>
        </InputBox>
        <InputBox>
          <InputTitle>Users</InputTitle>
          <InputDesc>회원 수</InputDesc>
          <form onSubmit={handleSubmit}>
            <Input name="users" onChange={handleChange} />
          </form>
        </InputBox>

        <Button type="submit" value="입력" />
      </InputField>
    </InputContainer>
  );
};

export default LtvResultInput;
