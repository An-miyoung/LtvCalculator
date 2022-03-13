import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalShow from "../stepCommon/modal/ModalShow";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InsightTitle = styled.span`
  margin-left: 20px;
  width: 107px;
  height: 30px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #424242;
`;

const InsightContainer = styled.div`
  margin: 10px auto;
  width: 940px;
  height: 119px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #424242;
`;

const DescriptionTitle = styled.span`
  display: block;
  margin-top: 17px;
  margin-left: 20px;
  width: 140px;
  height: 27px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #f3694c;
`;

const Description = styled.span`
  display: block;
  margin-top: 6px;
  margin-left: 20px;
  width: 896px;
  height: 43px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

const BottomBtnContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  right: 15px;
`;

const BottomBtn = styled.button`
  width: 260px;
  height: 44px;
  background: #0420bf;
  border-radius: 8px;
  font-family: "SpoqaHanSans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
`;

const LtvInsight: React.FC = () => {
  return (
    <Container>
      <InsightTitle>LTV Insight</InsightTitle>
      <InsightContainer>
        <DescriptionTitle>서비스지속조건</DescriptionTitle>
        <Description>
          사용자 1명을 500원 미만으로 모집해야 이 프로젝트를 지속할 수 있습니다.
          <br />
          해당 서비스를 지속 운영하여 사용자 10만 명 모집시, 연 순수익/매출은
          150,000,000원입니다.
        </Description>
      </InsightContainer>
      <InsightContainer>
        <DescriptionTitle>회원수증가조건</DescriptionTitle>
        <Description>
          계산된 LTV에 따라 회원 수를 늘리려면 10일 동안 5,000만원의 홍보비를
          사용하여
          <br />
          100,000,000명의 사용자를 지속적으로 유입시켜야 합니다.
        </Description>
      </InsightContainer>
      <InsightContainer>
        <DescriptionTitle>회원수유지조건</DescriptionTitle>
        <Description>
          계산된 LTV에 따라 회원 수를 늘리려면 10일 동안 5,000만원의 홍보비를
          사용하여
          <br />
          100,000,000명의 사용자를 지속적으로 유입시켜야 합니다.
        </Description>
      </InsightContainer>
      <BottomBtnContainer>
        <BottomBtn>다봤어요!!</BottomBtn>
      </BottomBtnContainer>
    </Container>
  );
};

export default LtvInsight;
