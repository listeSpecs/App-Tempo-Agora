import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default App;
