import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
import { FormData, UserInputType } from "../types";

export const userInputState = atom<UserInputType[]>({
  key: "userInputState",
  default: [],
});

export const inputIsComplete = selector({
  key: "inputIsComplete",
  get: ({ get }) => {
    const isDone = get(userInputState).length > 0;
    return isDone;
  },
});
