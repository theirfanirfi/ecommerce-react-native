/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from "native-base"
import { Provider } from "unstated"
import { DrawerNavigator } from "./navigation"
import { HomeStack } from "./navigation";
import PayPalScreen from './screens/PayPalScreen.js';


console.disableYellowBox = true
class App extends Component {
  render() {
    return (
      <Provider>
        <Root>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </Root>
      </Provider>
      // <PayPalScreen />

    )
  }
}



export default App;
