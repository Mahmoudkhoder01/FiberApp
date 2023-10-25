import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomButton from "../ReusabeTools/OnBoarding/BottomButton";
import { fonts } from "../ReusabeTools/Font";

const Join = ({ lineWidth, setLineWidth, setCurrentBoard }) => {
  const nextBoard = () => {
    if (lineWidth === 28.5) {
      setLineWidth((l) => l + 28.5);
    }
    setCurrentBoard("achieve");
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.gladContainer}>
            <Text style={styles.emoji}>👋</Text>
            <Text style={styles.gladTitle}>
              Glad you could join. Let's get started!
            </Text>
          </View>
          <Text style={styles.gladText}>
            In order to calculate and provide you with daily personalised
            recommendations, we would like to get to you know better. Your data
            remains private
          </Text>
        </View>
        <View style={styles.shieldContainer}>
          <Feather name="shield" size={14} color="#5d6b83" />
          <Text style={styles.shield}>
            All of your information is confidential.
          </Text>
        </View>
      </View>
      <BottomButton text={"Continue"} onPress={nextBoard} />
    </>
  );
};

export default Join;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  gladContainer: {
    marginHorizontal: 50,
    alignItems: "center",
  },
  emoji: {
    fontSize: 48,
  },
  gladTitle: {
    fontFamily: fonts.SemiBold,
    color: "#1f3455",
    fontSize: 24,
    textAlign: "center",
  },
  gladText: {
    fontFamily: fonts.Regular,
    textAlign: "center",
    color: "#4c5d77",
    margin: 25,
    fontSize: 15,
  },
  shieldContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  shield: {
    color: "#5d6b83",
    fontFamily: fonts.Regular,
  },
});
