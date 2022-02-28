import { createContext, Dispatch } from "react";
import { LeftSectionDisplay } from "../types";

type displayState = LeftSectionDisplay[];

export const AppDisplayContext = createContext<displayState | undefined>(
  undefined
);

type Action = { type: "Active"; step: string };
type DisplayDispatch = Dispatch<Action>;

export const DisplayDispatchContext = createContext<
  DisplayDispatch | undefined
>(undefined);

export function displayReducer(
  state: displayState,
  action: Action
): displayState {
  if (action.type === "Active") {
    return state.map((display) =>
      display.step === action.step
        ? { ...display, isActive: !display.isActive }
        : display
    );
  } else throw new Error("Unhandled action");
}
