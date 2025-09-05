const zustand = require("zustand");
const create = zustand.create as <T>(f: (set: any) => T) => any;

type ThemeName = "light" | "dark";

interface ThemeState {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: (t) => set({ theme: t }),
}));
