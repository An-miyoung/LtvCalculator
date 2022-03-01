import React from "react";
import styled from "styled-components";
import DataInput from "./forms/DataInput";
import CategorySelect from "./forms/CategorySelect";

const Container = styled.div`
  width: 880px;
  height: 745px;
`;

const BackgroundImage = styled.div`
  width: 681px;
  height: 201px;
  margin-top: 68px;
  margin-left: 100px;
`;

const GridBox = styled.div`
  width: 670px;
  height: 316px;
  margin-top: 41px;
  margin-left: 110px;
`;

const GridContainer = styled.div`
  display: grid;
  row-gap: 5px;
  column-gap: 100px;
  grid-template-columns: 285px 272px;
  grid-template-rows: 32px 54px;
`;

const Title = styled.div`
  span {
    display: inline;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    vertical-align: sub;
    color: #000000;
  }
`;
const EmailText = styled.div`
  padding-left: 10px;
  padding-top: 15px;
`;

const InputField = styled.div`
  width: 272px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const LtvStep2: React.FC = () => {
  return (
    <Container>
      <BackgroundImage>
        <img
          src={require("../assets/backgroundImg.png")}
          alt="City landscape"
        />
      </BackgroundImage>
      <GridBox>
        <GridContainer>
          <Title>
            <span>이메일</span>
          </Title>
          <Title>
            <span>카테고리</span>
          </Title>
          <InputField>
            <EmailText>로그인한 이메일이 출력될 예정</EmailText>
          </InputField>
          <InputField>
            <CategorySelect />
          </InputField>
        </GridContainer>
        <div style={{ marginTop: "19px" }} />
        <GridContainer>
          <Title>
            <span>서비스명</span>
          </Title>
          <Title>
            <span>구동환경</span>
          </Title>
          <InputField>
            <DataInput />
          </InputField>
          <InputField />
        </GridContainer>
        <div style={{ marginTop: "36px" }} />
        <GridContainer>
          <Title>
            <span>서비스 URL</span>
          </Title>
          <Title>
            <span>최장유지일</span>
          </Title>
          <InputField>
            <DataInput />
          </InputField>
          <InputField>
            <DataInput />
          </InputField>
        </GridContainer>
      </GridBox>
    </Container>
  );
};

export default LtvStep2;
