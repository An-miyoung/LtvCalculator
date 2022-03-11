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
  width: 275px;
  height: 29px;
  margin-top: 50px;
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
  padding-top: 25px;
  padding-left: 76px;
  padding-right: 76px;
  box-sizing: border-box;
`;

const Topic = styled.button<tabProps>`
  width: 245px;
  height: 50px;
  padding-top: 10px;
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
`;

const FileDescription: React.FC = () => {
  const [clicked, setClicked] = useState([true, false, false]);

  const [displayDesc, setDisplayDesc] = useState<DisplayDesc[]>([
    {
      step: "1",
      title: "Firebase",
      desc: "Firebase에서 프로젝트를 먼저 생성한다",
    },
    {
      step: "2",
      title: "Google Analytics",
      desc: "머신을 돌려서 Retention을 생성한다",
    },
    {
      step: "3",
      title: "직접 계산하기",
      desc: "CSV 파일이 추출될 수 있도록 버튼을 눌러준다.",
    },
  ]);

  const clickBtnHandler = (e: any, clickedIndex: number) => {
    const newClicked = clicked.map((c, index) => {
      return index === clickedIndex ? !c : false;
    });
    setClicked(newClicked);
  };

  return (
    <Container>
      <DescTitle>CSV 파일은 어떻게 구성해야 할까요?</DescTitle>
      <TopicContainer>
        {clicked.map((c, index) =>
          clicked[index] ? (
            <>
              <Topic
                key={index}
                isActive
                onClick={(e) => clickBtnHandler(e, index)}
              >
                <span>{displayDesc[index].title}</span>
              </Topic>
              <Card>{displayDesc[index].desc}</Card>
            </>
          ) : (
            <Topic key={index} onClick={(e) => clickBtnHandler(e, index)}>
              <span>{displayDesc[index].title}</span>
            </Topic>
          )
        )}
      </TopicContainer>
    </Container>
  );
};

export default FileDescription;
