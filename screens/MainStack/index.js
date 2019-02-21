import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";

export default createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#EE4D3B"
      },
      headerTintColor: "#FFFFFF"
    }
  }
);
