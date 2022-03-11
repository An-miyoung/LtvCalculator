import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { StepBtnState } from "../../store/StepBtnAtom";
import LeftSectionItem from "./LeftSectionItem";
import ModalShare from "./modal/ModalShare";

const Container = styled.div`
  width: 330px;
  height: 746px;
  padding-left: 130px;
  padding-top: 67px;
  box-sizing: border-box;
`;

const ShareBtn = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 95px;
  margin-left: -5px;
`;

function LeftSection() {
  const displayState = useRecoilValue(StepBtnState);

  return (
    <Container>
      {displayState.map((display) => (
        <LeftSectionItem display={display} key={display.step} />
      ))}
      <ShareBtn>
        <ModalShare />
      </ShareBtn>
    </Container>
  );
}

export default LeftSection;
