import React, { Component } from "react";
import { View } from "react-native";
import WeatherToday from "../../components/WeatherToday";
import WeatherList from "../../components/WeatherList";
import { get_weather_forecasts } from "../../apis";

// temp variables for storing city and country desired for weather forecast
const city = "Singapore";
const country = "Singapore";

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: `${city}, ${country}`
  };

  state = { forecasts: [] };

  componentDidMount() {
    get_weather_forecasts(city, country).then(forecasts => {
      this.setState({ forecasts });
    });
  }

  render() {
    const { forecasts } = this.state;
    return (
      <View style={{ marginTop: 15, flex: 1 }}>
        {forecasts.length > 0 && (
          <WeatherToday
            datetime={forecasts[0].datetime}
            temperature={forecasts[0].temperature}
            weather={forecasts[0].weather}
          />
        )}
        <View style={{ marginTop: 30, flex: 1 }}>
          <WeatherList forecasts={forecasts} />
        </View>
      </View>
    );
  }
}
