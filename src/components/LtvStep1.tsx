import React from "react";
import styled from "styled-components";
import FileDescription from "./FileDescription";
import FileUpload from "./FileUpload";

const Container = styled.div`
  width: 880px;
  height: 745px;
`;

const FileUploadContainer = styled.div`
  width: calc(880px-230px);
  height: 257px;
  margin-top: 65px;
  margin-left: 115px;
  margin-right: 115px;
`;

const LtvStep1: React.FC = () => {
  return (
    <Container>
      <FileUploadContainer>
        <FileUpload />
      </FileUploadContainer>
      <FileDescription />
    </Container>
  );
};

export default LtvStep1;
