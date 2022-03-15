import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const BottomBtnContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  right: 17px;
`;

const BottomBtn = styled.button`
  width: 260px;
  height: 44px;
  background: #0420bf;
  border-radius: 8px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  height: 485px;
  width: 473px;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
`;

const FloatContainer = styled.div`
  position: absolute;
  width: 100%;
  top: -80px;
  left: 0;
  background-color: gray;
`;

const ModalTitle = styled.div`
  position: relative;
  width: 100%;
  height: 38px;
  padding: 10px 10px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 38px;
  line-height: 38px;
  box-sizing: border-box;
  color: #fff;
`;

const ModalDesc = styled.div`
  width: 100%;
  height: 20px;
  padding: 15px 10px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
  color: #fff;
`;

const FormTitle = styled.div`
  margin-left: 35px;
  margin-bottom: 5px;
  height: 21px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  height: 70px;
`;

const Input = styled.input`
  margin-left: 30px;
  width: 413px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  &::placeholder {
    padding-left: 8px;
  }
`;

const Textarea = styled.textarea`
  margin-left: 30px;
  width: 413px;
  height: 140px;
  background: #ffffff;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  &::placeholder {
    padding-top: 10px;
    padding-left: 8px;
  }
`;

const AskBtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 120px;
`;

const AskBtn = styled.button`
  width: 233px;
  height: 44px;
  background: #4a73f3;
  border-radius: 8px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ModalShare = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BottomBtnContainer>
        <BottomBtn onClick={handleOpen}>다봤어요!!</BottomBtn>
      </BottomBtnContainer>
      <Modal isOpen={isOpen} onClose={handleClose} selector="1266px">
        <ModalBody>
          <div style={{ height: "35px" }} />
          <form>
            <InputContainer>
              <FormTitle>이메일</FormTitle>
              <Input placeholder="기업 메일 또는 개인 메일을 적으세요." />
            </InputContainer>
            <InputContainer>
              <FormTitle>기업명</FormTitle>
              <Input placeholder="기업 명 또는 개인 성함을 적으세요." />
            </InputContainer>
            <InputContainer>
              <FormTitle>내용</FormTitle>
              <Textarea placeholder="문의내용을 적으세요" />
            </InputContainer>
          </form>
          <AskBtnContainer>
            <AskBtn>문의하기</AskBtn>
          </AskBtnContainer>
          <FloatContainer>
            <ModalTitle>Contact 1z Labs</ModalTitle>
            <ModalDesc>
              추가적인 컨설팅이 필요할 시 1z Labs로 연락하세요!
            </ModalDesc>
          </FloatContainer>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalShare;
