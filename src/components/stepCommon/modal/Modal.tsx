import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

const Overlay = styled.div`
  position: fixed;
  width: 1440px;
  height: 803px;
  margin: 0 auto;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: 350px;
  position: relative;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Modal: React.FC<Props> = ({ children, selector, isOpen, onClose }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <Portal>
          {selector ? (
            <Overlay style={{ height: "1266px" }}>
              <Dim onClick={onClose} />
              <Container>{children}</Container>
            </Overlay>
          ) : (
            <Overlay>
              <Dim onClick={onClose} />
              <Container>{children}</Container>
            </Overlay>
          )}
        </Portal>
      </div>
    </CSSTransition>
  );
};

export default Modal;
