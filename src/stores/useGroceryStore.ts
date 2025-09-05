import { create } from "zustand";
import { persist } from "zustand/middleware";

type GroceryState = {
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  clear: () => void;
};

export const useGroceryStore = create<GroceryState>()(
  persist(
    (set) => ({
      checked: {},
      toggle: (id) =>
        set((s) => ({ checked: { ...s.checked, [id]: !s.checked[id] } })),
      clear: () => set({ checked: {} }),
    }),
    { name: "grocery-checked" }
  )
);
