import React, { useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useRecipeStore } from "../stores/useRecipeStore";
import { buildShoppingList } from "..//stores/utils/buildShoppingList";
import { useGroceryStore } from "../stores/useGroceryStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme";

export default function GroceryList() {
  const plan = useRecipeStore((s) => s.plan);
  const recipes = useMemo(() => Object.values(plan), [plan]);
  const items = useMemo(() => buildShoppingList(recipes), [recipes]);

  const checked = useGroceryStore((s) => s.checked);
  const toggle = useGroceryStore((s) => s.toggle);

  const renderItem = ({ item }: { item: (typeof items)[number] }) => {
    const isChecked = !!checked[item.ingredientId];
    return (
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
        onPress={() => toggle(item.ingredientId)}
      >
        <Checkbox
          value={isChecked}
          onValueChange={() => toggle(item.ingredientId)}
        />
        <View style={styles.middle}>
          <Text style={[styles.name, isChecked && styles.strike]}>
            {item.totalQty} {item.unit} {item.name}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.right}>
          {item.usedIn.join(", ")}
        </Text>
      </TouchableOpacity>
    );
  };
  const { colors } = useTheme();
  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={{ color: colors.primary }}>No recipes selected yet.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        keyExtractor={(i) => i.ingredientId}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  middle: {
    flex: 1,
    marginHorizontal: 12,
  },
  name: {
    fontSize: 16,
  },
  strike: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  right: {
    color: "#666",
    fontSize: 12,
    maxWidth: 120,
    textAlign: "right",
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#ddd",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
