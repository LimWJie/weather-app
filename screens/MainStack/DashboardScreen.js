import React, { Component } from "react";
import { View, Text } from "react-native";
import WeatherToday from "../../components/WeatherToday";

// temp variables for storing city and country desired for weather forecast
const city = "Singapore";
const country = "Singapore";

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: `${city}, ${country}`
  };

  render() {
    return (
      <View>
        <View style={{ marginTop: 15 }}>
          <WeatherToday
            datetime={1550739600}
            temperature={82}
            weather={"Thunderstorm"}
          />
        </View>
      </View>
    );
  }
}
