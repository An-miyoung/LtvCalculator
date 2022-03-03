import React, { useState } from "react";
import styled from "styled-components";

import DragDropInput from "./forms/DragDropInput";

const Container = styled.div`
  position: relative;
  width: 650px;
`;

const FileUploadButton = styled.button`
  position: relative;
  top: 20px;
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

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Container>
      <DragDropInput setFile={setFile} />
      {file !== null ? (
        <FileUploadButton style={{ backgroundColor: "#fff", color: "#4a73f3" }}>
          {file.name}
        </FileUploadButton>
      ) : (
        <FileUploadButton>컴퓨터에서 파일 선택</FileUploadButton>
      )}
    </Container>
  );
};

export default FileUpload;
