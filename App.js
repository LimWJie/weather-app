import React from "react";
import { createAppContainer } from "react-navigation";
import RootNavigator from "./screens/RootNavigator";

const AppContainer = createAppContainer(RootNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
