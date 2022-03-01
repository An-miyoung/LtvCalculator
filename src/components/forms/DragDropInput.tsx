import React, { Dispatch, FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Rocket from "../../assets/FileUploadImage.png";

const FileInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 650px;
  height: 257px;
`;

const FileUploadImage = styled.img`
  width: 102px;
  height: 88px;
  margin: 44px 274px 10px;
`;

const DropZone = styled.div`
  position: absolute;
  width: 650px;
  height: 257px;
  border: 2px dashed #4a73f3;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const FileUploadDesc = styled.span`
  display: block;
  width: 252px;
  height: 16px;
  margin: 147px 199px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #c0c0c0;
`;

const FileUploadButton = styled.button`
  position: relative;
  top: -143px;
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

const DragDropInput: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "text/csv, image/jpg, image/png, image/jpeg",
    });
  return (
    <div>
      <FileUploadImage src={Rocket} alt="Rocket laungh" />
      <FileInput {...getRootProps()}>
        <input {...getInputProps()} />

        {isDragReject ? (
          <DropZone style={{ border: "3px solid #F3694C" }}>
            <FileUploadDesc
              style={{ color: "#F3694C", fontSize: "16px", fontWeight: "bold" }}
            >
              CSV 형식의 파일만 입력가능합니다.
            </FileUploadDesc>
          </DropZone>
        ) : isDragAccept ? (
          <DropZone style={{ border: "3px solid green" }}>
            <FileUploadDesc>파일을 여기로 드래그하세요</FileUploadDesc>
          </DropZone>
        ) : (
          <DropZone>
            <FileUploadDesc>파일을 여기로 드래그하세요</FileUploadDesc>
            <FileUploadButton>컴퓨터에서 파일 선택</FileUploadButton>
          </DropZone>
        )}
      </FileInput>
    </div>
  );
};

export default DragDropInput;
