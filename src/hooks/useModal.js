import create from "zustand";

export const useModal = create((set) => ({
  content: null,
  modal: (content) => set({ content })
}));
