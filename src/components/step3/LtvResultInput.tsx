import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { resultInputState } from "../../store/inputAtom";
import ModalShow from "../stepCommon/modal/ModalShow";
import DataInput from "./DataInput2";
import Set from "../../assets/set.png";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 135px;
  padding-top: 15px;
  background: #ffffff;
  box-sizing: border-box;
  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #07145a;
    box-sizing: border-box;
  }
`;

const InitialSet = styled.div`
  position: absolute;
  width: 60px;
  height: 21px;
  left: 900px;
  top: 15px;
  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #7d7d7d;
  }
  cursor: pointer;
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
  margin-top: 42px;
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
  const [resultState, setResultState] = useRecoilState(resultInputState);

  const initialClick = () => {
    setResultState({ arpu: 0, cac: 0, users: 0 });
    window.location.replace("/ltvCal/result");
  };

  const handleSubmit = () => {
    setResultState({ arpu: 0, cac: 0, users: 0 });
  };

  const calulation = () => {
    //  resultState.arpu* (LTV 결과값) > resultState.cac
  };

  return (
    <InputContainer>
      <span>
        우리 회사의 사용자 1명당 매출(ARPU) , 고객획득비용(CAC) , 회원수를
        입력하세요.
        <ModalShow
          type="double"
          modalTitle1={"ARPU 란?"}
          descripton1={
            "계산된 LTV에 따라 회원 수를 늘리려면 15일동안 15,000원의 홍보비를 사용하여 15,000명의 사용자를 지속적으로 유입시켜야 합니다."
          }
          modalTitle2={"CAC 란?"}
          descripton2={
            "계산된 LTV에 따라 회원 수를 늘리려면 15일동안 15,000원의 홍보비를 사용하여 15,000명의 사용자를 지속적으로 유입시켜야 합니다."
          }
          top={"-390px"}
          left={"310px"}
        />
      </span>

      <InitialSet onClick={initialClick}>
        <form onSubmit={handleSubmit}>
          <span>{`초기화` + " "}</span>
          <img src={Set} alt="set initial" />
        </form>
      </InitialSet>

      <InputField>
        <InputBox>
          <InputTitle>ARPU</InputTitle>
          <InputDesc>일 사용자 1명당 매출</InputDesc>
          <DataInput id="arpu" />
        </InputBox>
        <InputBox>
          <InputTitle>CAC</InputTitle>
          <InputDesc>고객 획득 비용</InputDesc>
          <DataInput id="cac" />
        </InputBox>
        <InputBox>
          <InputTitle>Users</InputTitle>
          <InputDesc>회원 수</InputDesc>
          <DataInput id="users" />
        </InputBox>

        <Button type="submit" value="입력" onClick={calulation} />
      </InputField>
    </InputContainer>
  );
};

export default LtvResultInput;
