import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ArrowLine = ({ lineWidth, onPress }) => {
  const animatedLineWidth = useRef(new Animated.Value(lineWidth)).current;

  useEffect(() => {
    if (lineWidth > 256.5) return;

    Animated.timing(animatedLineWidth, {
      toValue: lineWidth,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [lineWidth]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.arrowBackground}>
          <MaterialIcons
            name="arrow-back-ios"
            size={25}
            color="#727E94"
            style={styles.arrow}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.originalLine}>
        <Animated.View
          style={[styles.onBoardLine, { width: animatedLineWidth }]}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  arrowBackground: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    paddingLeft: 9,
  },
  originalLine: {
    backgroundColor: "white",
    flex: 1,
    height: 6,
    borderRadius: 10,
  },
  onBoardLine: {
    backgroundColor: "#1F3455",
    borderRadius: 10,
    height: 6,
  },
});

export default ArrowLine;
