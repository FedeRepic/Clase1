import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading} from 'expo-app-loading'
import GameScreen from './screens/GameScreen';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';
import {useFonts} from 'expo-font'

export default function App() {

  const [loaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
  }) 

  if(!loaded) return <AppLoading/>

  const [userNumber, setUserNumber] = useState()

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}></StartGameScreen>

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title={'Adivina el numero'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
