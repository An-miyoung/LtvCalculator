import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Rocket from "../../assets/FileUploadImage.png";
import Complete from "../../assets/stepComplete.png";
import Cancel from "../../assets/fileUploadCancel.png";
import DragDropInput from "./DragDropInput";
import { StepBtnState } from "../../store/StepBtnAtom";

const Container = styled.div`
  position: relative;
  width: 650px;
`;

const DropZone = styled.div`
  position: absolute;
  width: 650px;
  height: 257px;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  border: 1px dashed;
`;

const FileUploadImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 60px 290px 10px;
`;

const FileUploadDesc = styled.span`
  position: relative;
  display: block;
  top: -138px;
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

const FileField = styled.div`
  display: flex;
  height: 21px;
  margin-top: 15px;
`;

const FileName = styled.div`
  margin-right: 20px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #424242;
`;

const FileCancel = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const FileUpload = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [displayState, setDone] = useRecoilState(StepBtnState);

  useEffect(() => {
    if (file !== null && file !== undefined) {
      setDone(
        displayState?.map((display) => {
          if (display.step === "1") {
            return {
              ...display,
              done: true,
            };
          }
          return display;
        })
      );
      console.log(displayState);
    }
  }, [file]);

  const fileUploadCancel = () => {
    window.location.replace("/ltvCal/");
  };

  return (
    <Container>
      <DragDropInput setFile={setFile} />
      {file !== null && file !== undefined ? (
        <DropZone style={{ border: "2px dashed #4a73f3" }}>
          <FileUploadImage src={Complete} alt="Upload complete" />
          <FileUploadDesc style={{ height: "20px", backgroundColor: "#fff" }}>
            {/* {URL.createObjectURL(file)} */}
            업로드 완료!!
            <FileField>
              <FileName>{file.name}</FileName>
              <FileCancel>
                <img src={Cancel} alt="Cancel" onClick={fileUploadCancel} />
              </FileCancel>
            </FileField>
          </FileUploadDesc>
        </DropZone>
      ) : (
        <>
          <FileUploadImage src={Rocket} alt="Rocket launch" />
        </>
      )}
    </Container>
  );
};

export default FileUpload;
