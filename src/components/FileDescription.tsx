import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const DescTitle = styled.div`
  width: 275px;
  height: 29px;
  margin-top: 33px;
  margin-left: 303px;
  font-family: "Noto Sans Thai Looped", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

const TopicContainer = styled.div`
  display: flex;
  padding-top: 16px;
  padding-left: 76px;
  padding-right: 76px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const TopicList = styled.div`
  position: relative;
  /* width: 184px; */
`;

const Topic = styled.div`
  width: 184px;
  height: 44px;
  padding-top: 13px;
  padding-left: 6px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  box-sizing: border-box;
`;

const Dot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 85px;
  background: #4a73f3;
  border-radius: 50%;
`;

const Line = styled.div`
  position: absolute;
  width: 809px;
  height: 7px;
  top: 86px;
  margin-left: 36px;
  margin-right: 36px;
  border-bottom: 1px dashed #999999;
`;

const Card = styled.div`
  width: 189px;
  height: 216px;
  margin-top: 23px;
  padding: 18px 15px;
  background: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
`;

const FileDescription: React.FC = () => {
  const [displayDesc, setDisplayDesc] = useState([
    {
      step: "1",
      title: "Firebase 생성하기",
      desc: "Firebase에서 프로젝트를 먼저 생성한다",
    },
    {
      step: "2",
      title: "Retention 생성하기",
      desc: "머신을 돌려서 Retention을 생성한다",
    },
    {
      step: "3",
      title: "CSV 파일 추출하기",
      desc: "CSV 파일이 추출될 수 있도록 버튼을 눌러준다.",
    },
  ]);

  return (
    <Container>
      <Line />
      <DescTitle>CSV 파일은 어떻게 구성해야 할까요?</DescTitle>
      <TopicContainer>
        {displayDesc.map((display) => (
          <TopicList key={display.step}>
            <Topic>{display.title}</Topic>
            <Dot />
            <Card>{display.desc}</Card>
          </TopicList>
        ))}
      </TopicContainer>
    </Container>
  );
};

export default FileDescription;
