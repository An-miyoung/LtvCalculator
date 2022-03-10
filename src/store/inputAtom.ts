import { atom, selector } from "recoil";
import { UserInputType } from "../types";

export const userInputState = atom<UserInputType>({
  key: "userInputState",
  default: {
    category: "",
    serviceName: "",
    os: "",
    serviceUrl: "",
    retentionDays: "",
  },
});

export const isShowError = atom({
  key: "isShowError",
  default: false,
});

export const isFileError = atom({
  key: "isFileError",
  default: false,
});

export const inputIsComplete = selector({
  key: "inputIsComplete",
  get: ({ get }) => {
    const obj = get(userInputState);
    console.log(obj);
    let objTotal = true;
    for (let keys in obj) {
      if (obj[keys] === "") objTotal = false;
    }
    return objTotal;
  },
});

export const whichIsError = selector({
  key: "whichError",
  get: ({ get }) => {
    const obj = get(userInputState);
    let errorObj: any = [];
    for (let keys in obj) {
      if (obj[keys] === "") errorObj.push(keys);
    }
    return errorObj;
  },
});
