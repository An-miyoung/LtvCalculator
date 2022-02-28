import { useContext } from "react";
import { DisplayDispatchContext } from "context/AppDisplayContext";

export default function useDispatchContext() {
  const dispatch = useContext(DisplayDispatchContext);
  if (!dispatch) throw new Error("Display Description not found.");
  return dispatch;
}
