import styled from "styled-components";
import useDispatchContext from "../../hooks/useDispatchContext";
import { LeftSectionDisplay } from "../../types";

const Step = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  cursor: pointer;
`;

const StepLogo = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

const StepTitle = styled.div`
  margin-left: 8px;
  > * {
    display: block;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }
`;

const StepText = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #000000;
`;

const StepDesc = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const Line = styled.div`
  margin: 20px 20px;
  width: 1px;
  height: 85px;
  border-left: 1px solid #c0c0c0;
`;

type displayProps = {
  display: LeftSectionDisplay;
};

function LeftSectionItem({ display }: displayProps) {
  const dispatch = useDispatchContext();

  const onActive = () => {
    if (display.isActive) return;
    else if (display.done) {
      dispatch({ type: "Active", step: display.step });
    }
  };
  const handleClick = () => {
    console.log("clicked");
    if (display.done) {
      console.log("next===>go");
    }
  };

  return (
    <>
      <Step key={display.step} onClick={handleClick}>
        <StepLogo
          color={display.isActive ? "#0420BF" : "#C0C0C0"}
          onClick={onActive}
        >
          <img
            src={require(`../../assets/step${display.step}.png`)}
            alt={`step${display.step}`}
          />
        </StepLogo>
        <StepTitle>
          <StepText>STEP{display.step}</StepText>
          <StepDesc>{display.title}</StepDesc>
        </StepTitle>
      </Step>
      {display.step === "3" ? null : <Line />}
    </>
  );
}

export default LeftSectionItem;
