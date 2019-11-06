import React, {useState, useEffect} from "react";
import Router from "./src/Router";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {Provider} from 'react-redux';
import store from "./src/Redux/Store";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect ( () => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(()=>{setIsReady(true);});
  }, []);

  return (
    <Provider store={store}>
      {isReady?<Router/>:<AppLoading/>}
    </Provider>
  )
};

export default App;
