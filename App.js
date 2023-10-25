import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./Screens/StartScreen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen from "./Screens/OnBoardingScreen";

export default function App() {
  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/Fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/Fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F7",
  },
});
