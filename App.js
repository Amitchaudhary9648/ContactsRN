import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavigationContainer/>
    </GlobalProvider>
  );
};

export default App;
