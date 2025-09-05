import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  DrawerActions,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { TouchableOpacity, useColorScheme } from "react-native";
import RecipeScreen from "../screens/RecipeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackParamList, RootStackParamList } from "../../types";
import SettingsScreen from "../screens/SettingsScreen";
import { useThemeStore } from "../stores/useThemeStore";
import RecepiesList from "../screens/RecepiesList";
import GroceryList from "../screens/GroceryList";
import { useTheme } from "../theme";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackGroup() {
  const { colors } = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu" size={24} style={{ color: colors.primary }} />
          </TouchableOpacity>
        ),
      })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const RecipeStack = createNativeStackNavigator();
function RecipeStackGroup() {
  return (
    <RecipeStack.Navigator initialRouteName="RecepiesList">
      <RecipeStack.Screen name={"RecepiesList"} component={RecepiesList} />
    </RecipeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabGoup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4CAF50",
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackGroup}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
          const isRecipe = routeName === "Recipe";
          return {
            tabBarStyle: isRecipe ? { display: "none" } : undefined,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Recepies"
        component={RecipeStackGroup}
        options={({ route }) => {
          const routeName =
            getFocusedRouteNameFromRoute(route) ?? "RecepiesList";
          const isRecipe = routeName === "Recipe";
          return {
            tabBarStyle: isRecipe ? { display: "none" } : undefined,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="nutrition" size={size} color={color} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Grocery List"
        component={GroceryList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basket" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Settings = createNativeStackNavigator();

function SettingsStackGroup() {
  const { colors } = useTheme();

  return (
    <Settings.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu" size={24} style={{ color: colors.primary }} />
          </TouchableOpacity>
        ),
      })}
    >
      <Settings.Screen name="SettingsGroup" component={SettingsScreen} />
    </Settings.Navigator>
  );
}

const DrawerGeoup = createDrawerNavigator();

function DrawerGroup() {
  return (
    <DrawerGeoup.Navigator screenOptions={{ headerShown: false }}>
      <DrawerGeoup.Screen name="Meal Planner" component={TabGoup} />
      <DrawerGeoup.Screen name="Settings Page" component={SettingsStackGroup} />
    </DrawerGeoup.Navigator>
  );
}

const Root = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const currentTheme = useColorScheme();

  const themeName = useThemeStore((s: { theme: string }) => s.theme);
  const theme = themeName === "dark" ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Root.Navigator>
        <Root.Screen
          name="MainTabs"
          component={DrawerGroup}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="Recipe"
          component={RecipeScreen}
          options={({ route }) => ({
            headerShown: true,
            title: "Recipe",
            headerBackTitle: route.params?.origin ?? "Back",
          })}
        />

        <Root.Screen
          name="RecepiesList"
          component={RecepiesList}
          options={({ route }) => ({
            headerShown: true,
            title: "RecepiesList",
          })}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
