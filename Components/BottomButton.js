import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const BottomButton = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [pressed && styles.buttonPressed]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 50,
    marginHorizontal: 50,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 100,
  },
  buttonContainer: {
    backgroundColor: "#e01f54",
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
