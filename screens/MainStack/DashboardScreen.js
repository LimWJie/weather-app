import React, { Component } from "react";
import { View, Text } from "react-native";
import WeatherToday from "../../components/WeatherToday";
import WeatherList from "../../components/WeatherList";
// temp variables for storing city and country desired for weather forecast
const city = "Singapore";
const country = "Singapore";

const FORECASTS_DUMMY = [
  {
    datetime: 1550815200,
    tempLow: 29.99,
    tempHigh: 32.13,
    weather: "Clouds"
  },
  {
    datetime: 1550815200,
    tempLow: 29.99,
    tempHigh: 32.13,
    weather: "Clouds"
  },
  {
    datetime: 1550815200,
    tempLow: 29.99,
    tempHigh: 32.13,
    weather: "Clouds"
  },
  {
    datetime: 1550815200,
    tempLow: 29.99,
    tempHigh: 32.13,
    weather: "Clouds"
  },
  {
    datetime: 1550815200,
    tempLow: 29.99,
    tempHigh: 32.13,
    weather: "Clouds"
  }
];

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: `${city}, ${country}`
  };

  render() {
    return (
      <View style={{ marginTop: 15, flex: 1 }}>
        <WeatherToday
          datetime={1550739600}
          temperature={82}
          weather={"Thunderstorm"}
        />
        <View style={{ marginTop: 30, flex: 1 }}>
          <WeatherList forecasts={FORECASTS_DUMMY} />
        </View>
      </View>
    );
  }
}
