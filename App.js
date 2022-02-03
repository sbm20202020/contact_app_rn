/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {LogBox, StyleSheet} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2', 'check out new Gestures system']);

import IntroSlider from './components/intro/IntroSlider';
import Home from './screens/Home';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  return (
    <>
      {showRealApp ? (
        <Home changeState={() => setShowRealApp(false)} />
      ) : (
        <IntroSlider onDone={onDone} onSkip={onSkip} />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
