import { View, StyleSheet } from "react-native";
import Title from "../ReusabeTools/OnBoarding/Title";
import CardFields from "../ReusabeTools/OnBoarding/CardFields";
import { useState } from "react";

const achieveOptions = [
  {
    id: "lose-weight",
    icon: "🔥",
    text: "Lose weight",
  },
  {
    id: "maintain-weight",
    icon: "⚖️",
    text: "Maintain weight",
  },
  {
    id: "gain-weight",
    icon: "📈",
    text: "Gain weight",
  },
];

const Achieve = () => {
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const nextBoard = (fieldId) => {
    setSelectedFieldId(fieldId);
    setIsDisabled(true);
  };

  return (
    <View style={styles.container}>
      <Title title={"What goal do you want to achieve with Fiber?"} />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <CardFields
          fields={achieveOptions}
          selectedFieldId={selectedFieldId}
          onPress={nextBoard}
          isDisabled={isDisabled}
        />
      </View>
    </View>
  );
};

export default Achieve;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
