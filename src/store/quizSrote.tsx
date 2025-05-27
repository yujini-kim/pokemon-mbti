import { create } from "zustand";

interface MBTIState {
  answers: string[];
  currentIndex: number;
  selectAnswer: (type: string) => void;
  reset: () => void;
}

export const useQuizStore = create<MBTIState>((set) => ({
  answers: [],
  currentIndex: 0,
  selectAnswer: (type) =>
    set((state) => ({
      answers: [...state.answers, type],
      currentIndex: state.currentIndex + 1,
    })),
  reset: () => set({ answers: [], currentIndex: 0 }),
}));
