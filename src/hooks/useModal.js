import create from "zustand";

export const useModal = create((set) => ({
  content: null,
  show: (content) => set((state) => ({ content }))
}));
