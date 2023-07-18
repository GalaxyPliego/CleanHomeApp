import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationIntro from './src/navigation/NavigationIntro';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <NavigationIntro/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
