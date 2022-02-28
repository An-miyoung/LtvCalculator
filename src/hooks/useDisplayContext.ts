import { useContext } from "react";
import { AppDisplayContext } from "context/AppDisplayContext";

export default function useDisplayState() {
  const display = useContext(AppDisplayContext);
  if (!display) throw new Error("Display Description not found.");
  return display;
}
