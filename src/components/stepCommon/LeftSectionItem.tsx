import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDispatchContext from "../../hooks/useDispatchContext";
import { LeftSectionDisplay } from "../../types";
import { useRecoilState } from "recoil";
import { userInputState } from "../../store/inputAtom";

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
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const dispatch = useDispatchContext();
  const [userInput, setUserInput] = useRecoilState(userInputState);

  const color = () => {
    switch (location.pathname) {
      case "/ltvCal/input":
        return display.step === "1" || display.step === "2"
          ? "#0420BF"
          : "#C0C0C0";
      // return {
      //   color: display.step === "1" || display.step === "2"
      //     ? "#0420BF"
      //     : "#C0C0C0",
      //   img: display.step === "1"
      //   ? "src"
      //   : "src",
      // }
      case "/ltvCal/result":
        return "#0420BF";
      default:
        return display.step === "1" ? "#0420BF" : "#C0C0C0";
    }
    // display.isActive ? "#0420BF" : "#C0C0C0"
  };
  const onActive = () => {
    if (display.isActive) return;
    else if (display.done) {
      dispatch({ type: "Active", step: display.step });
    }
  };
  const handleClick = () => {
    console.log("clicked", display);
    if (display.step === "2") {
      if (!userInput.category) {
        setUserInput({
          ...userInput,
          validateFail: true,
        });
        return;
      } else if (!userInput.serviceName) {
        setUserInput({
          ...userInput,
          validateFail: true,
        });
        return;
      }
      // TODO: else if add
      navigate("/ltvCal/result");
      // if (display.done) {
      //   console.log("next===>go");
      // }
    }
  };

  return (
    <>
      <Step key={display.step} onClick={handleClick}>
        <StepLogo color={color()} onClick={onActive}>
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
