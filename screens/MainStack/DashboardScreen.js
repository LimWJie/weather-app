import React, { Component } from "react";
import { View } from "react-native";
import WeatherNow from "../../components/WeatherNow";
import WeatherList from "../../components/WeatherList";
import { get_weather_forecasts } from "../../apis";
import config from "../../config/env.json";

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: `${config.city}, ${config.country}`
  };

  state = { forecasts: [] };

  componentDidMount() {
    get_weather_forecasts().then(forecasts => {
      this.setState({ forecasts });
    });
  }

  render() {
    const { forecasts } = this.state;
    return (
      <View style={{ marginTop: 15, flex: 1 }}>
        {forecasts.length > 0 && (
          <WeatherNow
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
