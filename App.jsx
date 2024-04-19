import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameOverScreen from "./screen/GameOverScreen";
import GameScreen from "./screen/GameScreen";
import StartGameScreen from "./screen/StartGameScreen";
import { Color } from "./screen/constants/color";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [rounds, setRounds] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  function gameOverHandler() {
    // console.log("Game is ended");
    setGameOver(true);
  }
  let screen = (
    <StartGameScreen
      setGameOver={setGameOver}
      setUserNumber={setUserNumber}
      userNumber={userNumber}
    />
  );

  function restartGame() {
    setGameOver(false);
    setUserNumber(null);
    setRounds(0);
  }

  if (userNumber) {
    // console.log("Game Screen");
    if (userNumber) {
      console.log("Game Screen");
      screen = (
        <GameScreen
          setUserNumber={setUserNumber}
          gameOverHandler={gameOverHandler}
          userNumber={userNumber}
          setRounds={setRounds}
        />
      );
    }
  }
  if (gameOver) {
    // console.log("Game Over Screen");
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        setUserNumber={setUserNumber}
        restartGame={restartGame}
        rounds={rounds}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Color.primary700, Color.accent500]}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
