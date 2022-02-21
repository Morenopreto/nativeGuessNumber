import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import StartGameScreen from "./views/StartGameScreen";
import GameScreen from "./views/GameScreen";

export default function App() {
  const [loaded] = useFonts({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
   
  })
  const [userNumber, setUserNumber] = useState();

  const HandleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if (!loaded) return <AppLoading />;

  let content = <StartGameScreen onStartGame={HandleStartGame} />;

  if (userNumber) content = <GameScreen userNumber={userNumber}/>;

  return (
    <View style={styles.container}>
      <Header />
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
