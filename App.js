import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';

const App = () => (
  <SafeAreaView style={{ flex: 1}}>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'}  />
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <Provider store={store}>
        <Text>Oi :D</Text>
      </Provider>
    </KeyboardAvoidingView>
  </SafeAreaView>
)

export default App;
