import create from "zustand";

export const useModal = create((set) => ({
  active: false,
  toggleActive: (bool) => set((state) => ({ active: bool ?? !state.active })),
  content: null,
  show: (newContent) =>
    set((state) => {
      state.toggleActive(true);
      return { content: newContent };
    })
}));
