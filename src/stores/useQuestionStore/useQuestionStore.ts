import { create } from "zustand";

interface IProps {
  frontArray: string[];
  backArray: string[];
  addAnswers: (type: "front" | "back") => void;
  removeAnswers: () => void;
}

const useQuestionStore = create<IProps>((set) => ({
  frontArray: [],
  backArray: [],

  addAnswers: (type: "front" | "back") =>
    set((state) => ({
      ...state,
      frontArray:
        type === "front" ? [...state.frontArray, type] : state.frontArray,
      backArray: type === "back" ? [...state.backArray, type] : state.backArray,
    })),

  removeAnswers: () =>
    set(() => ({
      frontArray: [],
      backArray: [],
    })),
}));

export default useQuestionStore;
