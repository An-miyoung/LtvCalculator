import React, { useState } from "react";
import styled from "styled-components";
import { DisplayDesc } from "../../types";

type tabProps = {
  readonly isActive?: boolean;
};

const Container = styled.div`
  position: relative;
`;

const DescTitle = styled.div`
  width: 800px;
  height: 29px;
  margin-top: 50px;
  font-family: "Noto Sans Thai Looped", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

const TopicContainer = styled.div`
  display: flex;
  padding-top: 25px;
  padding-left: 76px;
  padding-right: 76px;
  box-sizing: border-box;
`;

const Topic = styled.button<tabProps>`
  width: 245px;
  height: 50px;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  background: ${(props) => (props.isActive ? "#4A73F3" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
`;

const Card = styled.div`
  position: absolute;
  top: 100px;
  left: 75px;
  width: 735px;
  height: 172px;
  padding: 20px 20px;
  background: #f5f5f5;
  border-radius: 0px 0px 10px 10px;
  box-sizing: border-box;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #07145a;
`;

const FileDescription: React.FC = () => {
  const [displayDesc, setDisplayDesc] = useState<DisplayDesc[]>([
    {
      step: "1",
      title: "Firebase",
      desc: "Firebase는 앱을 빌드하고 실행하는 데 도움이 됩니다. Google에서 제공합니다. Firebase를 팀에서 즐겨 사용하는 도구에 쉽게 통합할 수 있습니다. Google에서 제공합니다. Customize Your App. Boost App Engagement. Release Apps Confidently. 15+ Products & Solutions.",
    },
    {
      step: "2",
      title: "Google Analytics",
      desc: "구글 애널리틱스는 현재 구글 마케팅 플랫폼 브랜드 내의 플랫폼으로서, 웹사이트 트래픽을 추적하고 보고하는 구글이 제공하는 웹 애널리틱스 서비스이다. 구글은 2005년 11월 Urchin을 인수한 이후 이 서비스를 런칭했다",
    },
    {
      step: "3",
      title: "직접 계산하기",
      desc: "CSV 파일이 추출될 수 있도록 버튼을 눌러준다.",
    },
  ]);

  const [clicked, setClicked] = useState(0);

  const clickBtnHandler = (e: any, clickedIndex: number) => {
    setClicked(clickedIndex);
  };

  return (
    <Container>
      <DescTitle>CSV 파일은 어떻게 구성해야 할까요?</DescTitle>
      <TopicContainer>
        {displayDesc.map((display, index) => (
          <Topic
            key={index}
            isActive={index === clicked}
            onClick={(e) => clickBtnHandler(e, index)}
          >
            {display.title}
          </Topic>
        ))}
      </TopicContainer>
      <div>
        <Card>{displayDesc[clicked].desc}</Card>
      </div>
    </Container>
  );
};

export default FileDescription;
