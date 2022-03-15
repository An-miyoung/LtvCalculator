import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Button = styled.button`
  border: none;
  &:active {
    opacity: 0.8;
  }
`;

const Share = styled.div`
  cursor: pointer;
`;

const ModalBody = styled.div`
  height: 194px;
  width: 276px;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

const ShareTitle = styled.div`
  width: 236px;
  height: 21px;
  margin: 15px auto;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 200px;
  margin: 15px auto;
  justify-content: space-between;
`;

const ModalShare = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=https://naver.com/"
    );
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={require("../../../assets/shareBtn.png")} alt="Share" />
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} selector="1266px">
        <ModalBody>
          <ShareTitle>이 결과를 공유합니다</ShareTitle>
          <FlexContainer>
            <div>
              <div>
                <img src={require("../../../assets/Google.png")} alt="Google" />
              </div>
              <div>
                <img
                  src={require("../../../assets/Google-text.png")}
                  alt="Google"
                />
              </div>
            </div>
            <div>
              <div>
                <img src={require("../../../assets/Kakao.png")} alt="Kakao" />
              </div>
              <div>
                <img
                  src={require("../../../assets/Kakao-text.png")}
                  alt="Kakao"
                />
              </div>
            </div>
            <div>
              <div>
                <img src={require("../../../assets/Line.png")} alt="Line" />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img
                  src={require("../../../assets/Line-text.png")}
                  alt="Line"
                />
              </div>
            </div>
          </FlexContainer>
          <FlexContainer>
            <Share onClick={clickFacebook}>
              <div>
                <img
                  src={require("../../../assets/Facebook.png")}
                  alt="Facebook"
                />
              </div>
              <div>
                <img
                  src={require("../../../assets/Facebook-text.png")}
                  alt="Facebook"
                />
              </div>
            </Share>
            <div>
              <div>
                <img
                  src={require("../../../assets/Twitter.png")}
                  alt="Twitter"
                />
              </div>
              <div>
                <img
                  src={require("../../../assets/Twitter-text.png")}
                  alt="Twitter"
                />
              </div>
            </div>
            <div>
              <div>
                <img src={require("../../../assets/Url.png")} alt="URL" />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img src={require("../../../assets/URL-text.png")} alt="URL" />
              </div>
            </div>
          </FlexContainer>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalShare;
