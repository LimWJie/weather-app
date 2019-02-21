import { createSwitchNavigator } from "react-navigation";
import MainStack from "./MainStack";

// This file is redundant in this use case
// but it sets up a structure that is easier to add any new parts to the app
// for example, login screen

export default createSwitchNavigator({
  MainStack
});
