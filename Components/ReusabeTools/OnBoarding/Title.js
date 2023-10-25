import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../CssTools";

const Title = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.semiBold,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
});
