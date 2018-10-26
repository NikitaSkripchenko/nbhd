import React, {Component} from 'react';
import { StatusBar } from 'react-native'
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from "./screens/AppNavigator";
import colors from "./assets/colors/colors";

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: colors.orange,
      accent: colors.orange,
  }
};

export default class Main extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
            <StatusBar
                backgroundColor={colors.orange}
                barStyle="light-content"
            />
            <AppNavigator/>
        </PaperProvider>
    )
  }
}
