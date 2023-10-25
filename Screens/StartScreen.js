import { View, Text, Image, StyleSheet } from "react-native";
import BottomButton from "../Components/ReusabeTools/OnBoarding/BottomButton";
import { fonts } from "../Components/ReusabeTools/Font";

const StartScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/Images/HappyUsers.png")} />
        <Image source={require("../assets/Images/Colorful.png")} />
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeText, styles.welcomeTitle]}>
            Welcome to Fiber!
          </Text>
          <Text
            style={[styles.welcomeText, { color: "#4c5d77", fontSize: 16 }]}
          >
            Reach your goals faster with the all-in-one macro tracker.
          </Text>
        </View>
      </View>
      <BottomButton
        text={"Get started for free"}
        onPress={() => navigation.navigate("OnBoarding")}
      />
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  welcomeContainer: {
    marginHorizontal: 40,
  },
  welcomeText: {
    fontFamily: fonts.Regular,
    textAlign: "center",
  },
  welcomeTitle: {
    fontFamily: fonts.SemiBold,
    color: "#1f3455",
    fontSize: 24,
  },
});
