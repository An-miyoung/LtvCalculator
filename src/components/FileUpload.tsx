import React from "react";
import styled from "styled-components";
import Rocket from "../assets/FileUploadImage.png";

const Container = styled.div`
  width: 650px;
  overflow: hidden;
`;

const FileUploadImage = styled.img`
  width: 102px;
  height: 88px;
  margin: 44px 274px 10px;
`;

const FileUploadDesc = styled.span`
  display: block;
  width: 252px;
  height: 16px;
  margin: 5px 199px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #c0c0c0;
`;

const FileUploadButton = styled.button`
  width: 238px;
  height: 41px;
  margin: 0 206px;
  background: #4a73f3;
  border-radius: 10px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

const FileUpload: React.FC = () => {
  return (
    <Container>
      <FileUploadImage src={Rocket} alt="Rocket laungh" />
      <FileUploadDesc>파일을 여기로 드래그하세요</FileUploadDesc>
      <FileUploadButton>컴퓨터에서 파일 선택</FileUploadButton>
    </Container>
  );
};

export default FileUpload;
