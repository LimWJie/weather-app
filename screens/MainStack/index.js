import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import theme from "../../style/theme.style";

export default createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR
      },
      headerTintColor: theme.HEADER_TINT_COLOR
    }
  }
);
