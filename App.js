import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import { I18n } from 'i18n-js';
import en from './src/langs/en.json';
import gr from './src/langs/gr.json';
import it from './src/langs/it.json';
import tr from './src/langs/tr.json';
const i18n = new I18n({ en, gr, it, tr });

const Stack = createNativeStackNavigator();

import { AppContext } from './src/context/AppContext';

export default function App() {

  const [locale, setLocale] = useState('tr');

  const appContext = useMemo(() => {
    return {
      t: (scope, options) => {
        return i18n.t(scope, { locale, ...options });
      },
      locale,
      setLocale
    }
  }, [locale]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <NavigationContainer>
        <AppContext.Provider value={appContext}>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
          </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}