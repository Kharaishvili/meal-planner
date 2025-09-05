import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MOCK_RECIPES } from "../stores/mocks/recipes";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useMemo } from "react";
import { useTheme } from "../theme";

type Props = RouteProp<RootStackParamList, "RecepiesList">;

export type DayKey =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export default function RecepiesList({ route }: any) {
  const { dayIndex } = route.params ?? -1;

  const DAYS: DayKey[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const navigation = useNavigation<any>();
  const { showActionSheetWithOptions } = useActionSheet();

  const options = useMemo(() => [...DAYS, "Cancel"], []);
  const cancelButtonIndex = options.length - 1;

  const handleAddToDay = (recipe: any) => {
    showActionSheetWithOptions(
      {
        title: "Choose a day?",
        message: "Pick a day to schedule this recipe",
        options,
        cancelButtonIndex,
      },
      (dayIndex?: number) => {
        if (dayIndex === undefined || dayIndex === cancelButtonIndex) return;
        const DAYS: DayKey[] = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        navigation.navigate("Recipe", { dayIndex, recipe });
      }
    );
  };

  const pick = (recipe: { id: string }) => {
    if (dayIndex >= 0) {
      navigation.replace("Recipe", { dayIndex, recipe });
    } else {
      console.log("select day");
      handleAddToDay(recipe);
    }
  };
  const { colors } = useTheme();
  return (
    <FlatList
      data={MOCK_RECIPES}
      keyExtractor={(r) => r.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.item, { backgroundColor: "#ddd" }]}
          onPress={() => pick(item)}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
  },
});
