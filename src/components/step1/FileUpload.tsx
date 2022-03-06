import React, { useState } from "react";
import styled from "styled-components";
import Rocket from "../../assets/FileUploadImage.png";
import Complete from "../../assets/uploadComplete.png";
import DragDropInput from "../forms/DragDropInput";
import useDisplayState from "../../hooks/useDisplayContext";

const Container = styled.div`
  position: relative;
  width: 650px;
`;

const FileUploadImage = styled.img`
  width: 102px;
  height: 88px;
  margin: 63px 274px 10px;
`;

const FileUploadDesc = styled.span`
  position: relative;
  display: block;
  top: -131px;
  width: 252px;
  height: 16px;
  margin: 147px 199px;
  font-family: "Noto Sans Thai Looped", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #000;
`;

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const displayContext = useDisplayState();

  if (file !== null && file !== undefined) {
    displayContext?.map((display) => {
      if (display.step === "1") {
        display.done = true;
      }
      console.log(display);
    });
  }

  return (
    <Container>
      <DragDropInput setFile={setFile} />
      {file !== null && file !== undefined ? (
        <>
          <FileUploadImage src={Complete} alt="Upload complete" />
          <FileUploadDesc style={{ height: "18px", backgroundColor: "#fff" }}>
            {/* {file.name} */}
            {/* {URL.createObjectURL(file)} */}
            업로드 완료!!
          </FileUploadDesc>
        </>
      ) : (
        <>
          <FileUploadImage src={Rocket} alt="Rocket launch" />
        </>
      )}
    </Container>
  );
};

export default FileUpload;
