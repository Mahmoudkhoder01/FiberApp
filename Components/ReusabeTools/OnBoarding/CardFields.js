import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../CssTools";
import { MaterialIcons } from "@expo/vector-icons";

const CardFields = ({ fields, onPress, selectedFieldId, isDisabled }) => {
  return (
    <>
      {fields.map((field, index) => (
        <TouchableOpacity
          onPress={() => onPress(field.id)}
          key={index}
          style={[
            styles.container,
            field.id === selectedFieldId && styles.selectedField, 
          ]}
          disabled={isDisabled}
        >
          <View style={styles.fieldWrapper}>
            <Text style={styles.icon}>{field.icon}</Text>
            <Text style={styles.text}>{field.text}</Text>
          </View>
          {field.id === selectedFieldId && (
            <MaterialIcons name="done" size={24} color="#e01f54" />
          )}
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CardFields;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 28,
    height: 80,
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 10,
    elevation: 5,
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 24,
  },
  selectedField: {
    borderWidth: 1,
    borderColor: "#e01f54",
  },
  icon: {
    fontSize: 23,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fonts.medium,
    paddingTop: 5,
  },
  fieldWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
