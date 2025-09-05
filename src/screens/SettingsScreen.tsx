import React from "react";
import { View, Text, Button } from "react-native";
import { useThemeStore } from "../stores/useThemeStore";

export default function Settings() {
  const { theme, setTheme } = useThemeStore();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current theme: {theme}</Text>
      <Button
        title="Switch to light"
        onPress={() => setTheme("light")}
        disabled={theme === "light"}
      />
      <Button
        title="Switch to dark"
        onPress={() => setTheme("dark")}
        disabled={theme === "dark"}
      />
    </View>
  );
}
