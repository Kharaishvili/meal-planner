import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import DefaultImage from "../images/DefaultImage.png";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { useRecipeStore } from "../stores/useRecipeStore";
import { useTheme } from "../theme";

type HomeNavigationProp = RouteProp<RootStackParamList, "Home">;

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.7;
const _imageHeight = width * 0.8;
const _spacing = 12;

function Day({
  item,
  index,
  scrollX,
}: {
  item: { day: string; image: ImageSourcePropType };
  index: number;
  scrollX: SharedValue<number>;
}) {
  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [0.8, 1, 0.8]
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [50, 0, -50]
          )}deg`,
        },
      ],
    };
  });

  const { plan } = useRecipeStore();
  const chosen = plan[index];

  // console.log(chosen);

  const navigation = useNavigation<any>();

  const handleDayPress = (dayIndex: number) => {
    if (chosen) {
      navigation.navigate("Recipe", {
        dayIndex,
        recipe: chosen,
      });
    } else {
      navigation.navigate("RecepiesList", {
        dayIndex,
        origin: "Home",
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleDayPress(index)}
      style={{
        width: _imageWidth,
        height: _imageHeight,
        overflow: "hidden",
        borderRadius: 16,
        alignItems: "center",
        aspectRatio: 0.6,
      }}
    >
      <Text
        style={{
          padding: 20,
          fontSize: 39,
          color: "rgba(0, 0, 0, 0.5)",
          textShadowOffset: { width: 1, height: 1 },
          textShadowColor: "black",
          textShadowRadius: 2,
          fontStyle: "italic",
          fontWeight: "300",
          // position: "absolute",
        }}
      >
        {item.day}
      </Text>
      <Animated.Image
        source={item.image}
        style={[{ width: _imageWidth, height: _imageHeight }, styles]}
      />
    </TouchableOpacity>
  );
}

function BackdropPhoto({
  photo,
  index,
  scrollX,
}: {
  photo: any;
  index: number;
  scrollX: SharedValue<number>;
}) {
  const styles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });

  return (
    <Animated.Image
      source={photo}
      style={[StyleSheet.absoluteFillObject, styles]}
      blurRadius={50}
    />
  );
}

export default function HomeScreen() {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const;

  const { plan } = useRecipeStore();

  const data = dayNames.map((day, idx) => ({
    id: idx,
    day,
    image: plan[idx]?.image ?? DefaultImage,
  }));

  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (_imageWidth + _spacing);
  });

  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.card,
      }}
    >
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((day, index) => (
          <BackdropPhoto
            photo={day.image}
            index={index}
            scrollX={scrollX}
            key={day.day}
          />
        ))}
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.day}
        style={{ flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _imageWidth) / 2,
        }}
        renderItem={({ item, index }) => {
          return <Day item={item} index={index} scrollX={scrollX} />;
        }}
        onScroll={onScroll}
      ></Animated.FlatList>
    </View>
  );
}
