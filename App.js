/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DateHead from './components/DateHead';

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView>
      <DateHead />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default App;
