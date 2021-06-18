import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes/index.js';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  );
}
