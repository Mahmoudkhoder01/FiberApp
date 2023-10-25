import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ArrowLine from "../Components/OnBoarding/ArrowLIne";
import Join from "../Components/OnBoarding/Join";
import Achieve from "../Components/OnBoarding/Achieve";
import * as Animatable from "react-native-animatable";

const OnBoardingScreen = ({ navigation }) => {
  const [lineWidth, setLineWidth] = useState(28.5);
  const [currentBoard, setCurrentBoard] = useState("join");

  const handleChangeBoard = () => {
    if (currentBoard === "join") {
      navigation.navigate("Start");
    } else {
      setCurrentBoard("join");
    }
  };

  const animationDuration = 1000;

  return (
    <>
      <ArrowLine
        lineWidth={lineWidth}
        setLineWidth={setLineWidth}
        setCurrentBoard={setCurrentBoard}
        onPress={handleChangeBoard}
      />
      {currentBoard === "join" && (
        <Animatable.View
          animation="slideInLeft"
          duration={animationDuration}
          style={{ flex: 1 }}
        >
          <Join
            lineWidth={lineWidth}
            setLineWidth={setLineWidth}
            setCurrentBoard={setCurrentBoard}
          />
        </Animatable.View>
      )}
      {currentBoard === "achieve" && (
        <Animatable.View
          animation="slideInRight"
          duration={animationDuration}
          style={{ flex: 1 }}
        >
          <Achieve />
        </Animatable.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default OnBoardingScreen;
