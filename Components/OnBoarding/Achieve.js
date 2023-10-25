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

const Achieve = ({ lineWidth, setCurrentBoard, setLineWidth }) => {
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const nextBoard = (fieldId) => {
    setSelectedFieldId(fieldId);
    setIsDisabled(true);

    // Introduce a 0.15-second delay before moving to the "gender" board
    setTimeout(() => {
      if (lineWidth === 57) {
        setLineWidth((l) => l + 28.5);
      }
      setCurrentBoard("gender");
    }, 500); // 150 milliseconds
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
