import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import MainNavigation from './navigation';
import { Provider } from 'react-redux'
import storeMio from './store'

export default function App() {

  return (
    <Provider store={storeMio}>
     <MainNavigation />
    </Provider>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});