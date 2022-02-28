import React, { useReducer } from "react";
import {
  AppDisplayContext,
  DisplayDispatchContext,
  displayReducer,
} from "context/AppDisplayContext";

const AppDisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [leftSectionDisplay, dispatch] = useReducer(displayReducer, [
    {
      step: "1",
      title: "CSV 파일 올리기",
      isActive: true,
      done: false,
    },
    {
      step: "2",
      title: "기본정보입력",
      isActive: false,
      done: false,
    },
    {
      step: "3",
      title: "LTV 결과 확인",
      isActive: false,
      done: false,
    },
  ]);

  return (
    <DisplayDispatchContext.Provider value={dispatch}>
      <AppDisplayContext.Provider value={leftSectionDisplay}>
        {children}
      </AppDisplayContext.Provider>
    </DisplayDispatchContext.Provider>
  );
};

export default AppDisplayProvider;
