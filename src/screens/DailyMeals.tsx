import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../types";

type DailyMealsNavigationProp = RouteProp<RootStackParamList, "DailyMeals">;

const daysData = [
  { day: "Monday", chosenRecipe: null },
  { day: "Tuesday", chosenRecipe: null },
  { day: "Wednesday", chosenRecipe: null },
  { day: "Thursday", chosenRecipe: null },
  { day: "Friday", chosenRecipe: null },
  { day: "Saturday", chosenRecipe: null },
  { day: "Sunday", chosenRecipe: null },
];

export default function DailyMeals() {
  const [days, setDays] = useState(daysData);

  const navigation = useNavigation<any>();

  const handleDayPress = (dayIndex: number) => {
    navigation.navigate("RecepiesList", {
      dayIndex,
      origin: "DailyMeals",
    });
  };

  const _renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.dayItem}
        onPress={() => handleDayPress(index)}
      >
        <Text style={styles.dayText}>{item.day}</Text>
        {item.chosenRecipe ? (
          <Text style={styles.recipeText}>Chosen: {item.chosenRecipe}</Text>
        ) : (
          <Text style={styles.recipeText}>No recipe selected</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={daysData}
        keyExtractor={(item) => item.day}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dayItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  recipeText: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
});
