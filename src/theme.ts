import { useColorScheme } from "react-native";
import { create } from "zustand";

export type Scheme = "light" | "dark";
type Colors = {
  bg: string;
  card: string;
  text: string;
  muted: string;
  primary: string;
  separator: string;
};
export type Theme = { scheme: Scheme; colors: Colors };

const light: Theme = {
  scheme: "light",
  colors: {
    bg: "#FFFFFF",
    card: "#F7F7F9",
    text: "#11181C",
    muted: "#667085",
    primary: "#3D7FFF",
    separator: "#E6E8EB",
  },
};

const dark: Theme = {
  scheme: "dark",
  colors: {
    bg: "#0B0F13",
    card: "#11161B",
    text: "#EAEFF5",
    muted: "#9BA7B3",
    primary: "#7BA5FF",
    separator: "#1E252C",
  },
};

type SettingsState = { themeOverride?: Scheme; setTheme: (s?: Scheme) => void };
export const useSettingsStore = create<SettingsState>((set) => ({
  themeOverride: undefined,
  setTheme: (s) => set({ themeOverride: s }),
}));

export function useTheme(): Theme {
  const system = (useColorScheme() ?? "light") as Scheme;
  const override = useSettingsStore((s) => s.themeOverride);
  return (override ?? system) === "dark" ? dark : light;
}
