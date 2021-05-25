import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Loading from './src/components/Loading';
import MainNavigator from './src/navigation/MainNavigator';

const customFonts = {
  Montserrat: require('./assets/fonts/Montserrat.ttf'),
  MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
};

const App = () => {
  const [isLoading] = useFonts(customFonts);

  if (!isLoading) {
    return (<Loading />);
  }

  return (
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
};

export default App;
