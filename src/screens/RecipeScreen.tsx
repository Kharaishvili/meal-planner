import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { useRecipeStore } from "../stores/useRecipeStore";
import { INGREDIENTS } from "../stores/mocks/ingredients";
import { useTheme } from "../theme";

const { width } = Dimensions.get("window");

export default function RecipeScreen({ route }: any) {
  console.log(route);
  const { dayIndex, recipe } = route.params;

  const { setRecipe } = useRecipeStore();

  const navigation = useNavigation<any>();

  const handleAddRecipe = () => {
    setRecipe(dayIndex, recipe);
    navigation.goBack();
  };

  const { colors } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.heroImage} />

      <View style={styles.header}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.meta}>
          ⏱ {recipe.prepTime} + 🍳 {recipe.cookTime} | 🍽 {recipe.servings}
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ri: any, idx: number) => {
          const meta = INGREDIENTS.find((i) => i.id === ri.ingredientId);
          if (!meta) return <Text key={idx}>• Unknown Ingredient</Text>;

          return (
            <Text key={idx} style={styles.line}>
              • {ri.quantity} {ri.unit} {meta.name}
              {ri.preparation ? `, ${ri.preparation}` : ""}
            </Text>
          );
        })}
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.steps.map((step: any, i: any) => (
          <View key={i} style={styles.stepRow}>
            <Text style={styles.stepNumber}>{i + 1}.</Text>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>

      <View>
        <Button title="Add Recipe" onPress={handleAddRecipe} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heroImage: { width, height: width * 0.6 },
  header: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 6 },
  meta: { fontSize: 14, color: "#666" },
  section: { paddingHorizontal: 16, marginTop: 24 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  ingredientRow: { flexDirection: "row", marginBottom: 4 },
  bullet: { marginRight: 8 },
  ingredientText: { fontSize: 16 },
  stepRow: { flexDirection: "row", marginBottom: 12 },
  stepNumber: { fontSize: 16, fontWeight: "bold", marginRight: 8 },
  stepText: { fontSize: 16, flex: 1 },
  line: { fontSize: 16, marginVertical: 2 },
});
