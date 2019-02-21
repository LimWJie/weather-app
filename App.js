import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import RootNavigator from "./screens/RootNavigator";

const AppContainer = createAppContainer(RootNavigator);
export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return <AppContainer />;
  }
}
