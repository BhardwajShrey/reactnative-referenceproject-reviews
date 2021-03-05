import React, {useState} from 'react';
import * as Font  from "expo-font";
import AppLoading from "expo-app-loading";
// libraries

import Navigator from "./routes/Drawer";
// components

const getFonts = () =>
{
  return Font.loadAsync(
    {
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-lightitalic": require("./assets/fonts/Roboto-LightItalic.ttf")
    }
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded)
  {
    return (
      <Navigator />
    );
  }
  else
  {
    return(
      <AppLoading
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
        onError = {console.warn}
      />
    );
  }
}