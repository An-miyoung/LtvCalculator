import styled from "styled-components";
import useDisplayState from "../../hooks/useDisplayContext";
import LeftSectionItem from "./LeftSectionItem";

const Container = styled.div`
  width: 330px;
  height: 746px;
  padding-left: 130px;
  padding-top: 67px;
  box-sizing: border-box;
`;

function LeftSection() {
  const displayState = useDisplayState();

  return (
    <Container>
      {displayState.map((display) => (
        <LeftSectionItem display={display} key={display.step} />
      ))}
    </Container>
  );
}

export default LeftSection;
