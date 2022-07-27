import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import ShopNavigator from './navigation/ShopNavigator';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

  return (
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});