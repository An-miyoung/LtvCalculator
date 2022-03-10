import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { StepBtnState } from "../../store/StepBtnAtom";
import LeftSectionItem from "./LeftSectionItem";

const Container = styled.div`
  width: 330px;
  height: 746px;
  padding-left: 130px;
  padding-top: 67px;
  box-sizing: border-box;
`;

function LeftSection() {
  const displayState = useRecoilValue(StepBtnState);

  return (
    <Container>
      {displayState.map((display) => (
        <LeftSectionItem display={display} key={display.step} />
      ))}
    </Container>
  );
}

export default LeftSection;
