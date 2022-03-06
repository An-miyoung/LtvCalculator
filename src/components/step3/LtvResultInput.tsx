import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UserInputContainer = styled.div`
  margin-top: 65px;
  margin-left: 20px;
`;

const InputContainer = styled.div`
  width: 680px;
  height: 124px;
  padding-top: 15px;
  padding-left: 25px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
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
const ModalTitle = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #c0c0c0;
`;

const InputField = styled.div`
  display: flex;
  /* width: 571px; */
  height: 35px;
  margin-top: 8px;
  margin-left: 60px;
`;

const Input = styled.input`
  width: 140px;
  height: 35px;
  margin-right: 15px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #7e84a8;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  float: right;
  bottom: 100px;
  right: 24px;
  width: 100px;
  height: 35px;
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

const ShowContainer = styled.div`
  display: flex;
  width: 699px;
  height: 103px;
  margin-top: 20px;
`;

const ShowItem = styled.div`
  width: 214px;
  height: 103px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 19px;
  border: 1px solid red;
`;

const LtvResultInput: React.FC = () => {
  const inputTitleList = ["ARPU", "CAC", "회원수"];
  const [input, setInput] = useState({ arpu: "", cac: "", 회원수: "" });

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setInput({ ...input, arpu: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <UserInputContainer>
      <InputContainer>
        <span>
          우리 회사의 사용자 1명당 매출(ARPU), 고객획득비용(CAC), 회원수를
          입력하세요.
        </span>
        <ModalTitle>ARPU,CAC 란?</ModalTitle>
        <InputField>
          <form onSubmit={handleSubmit}>
            {inputTitleList.map((title, index) => (
              <>
                <Input
                  key={index}
                  name={title}
                  placeholder={" " + " " + `${title}`}
                  onChange={handleChange}
                />
              </>
            ))}
            <Button type="submit" value="입력" />
          </form>
        </InputField>
      </InputContainer>
      <ShowContainer>
        {inputTitleList.map((title, index) => (
          <ShowItem key={index}>{title}</ShowItem>
        ))}
      </ShowContainer>
    </UserInputContainer>
  );
};

export default LtvResultInput;
