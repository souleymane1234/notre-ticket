import React, {useEffect} from 'react';

import Router from './src/navigations/router';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    // LogBox.ignoreAllLogs();
  }, []);
  return (
    <Router />
  );
};


export default App;
