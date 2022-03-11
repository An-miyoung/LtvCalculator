import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Info from "../../../assets/info.png";

const Button = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  font-size: 16px;
  &:active {
    opacity: 0.8;
  }
`;

const ModalTitle = styled.div`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

const ModalDesc = styled.div`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  /* height: 130px; */
  /* overflow: hidden auto; */
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

type ModalType = {
  type: string;
  modalTitle1?: string;
  descripton1?: string;
  modalTitle2?: string;
  descripton2?: string;
  top?: string;
  left?: string;
};

const ModalShow: FunctionComponent<ModalType> = ({
  type,
  modalTitle1,
  descripton1,
  modalTitle2,
  descripton2,
  top,
  left,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={Info} alt="Information" />
      </Button>
      {type === "double" ? (
        <Modal isOpen={isOpen} onClose={handleClose} selector="1266px">
          <ModalBody style={{ top: top, left: left, height: "135px" }}>
            <ModalTitle>{modalTitle1}</ModalTitle>
            <ModalDesc>{descripton1}</ModalDesc>
            <div style={{ height: "3px" }}>
              <ModalTitle>{modalTitle2}</ModalTitle>
              <ModalDesc>{descripton2}</ModalDesc>
            </div>
          </ModalBody>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalBody style={{ top: top, left: left }}>
            <ModalTitle>{modalTitle1}</ModalTitle>
            <ModalDesc>{descripton1}</ModalDesc>
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export default ModalShow;
