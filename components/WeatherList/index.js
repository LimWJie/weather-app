import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import WeatherListItem from "./WeatherListItem";

const WeatherList = props => {
  return (
    <View>
      {props.forecasts.map((forecast, index) => (
        <WeatherListItem
          key={index}
          datetime={forecast.datetime}
          tempLow={forecast.tempLow}
          tempHigh={forecast.tempHigh}
          weather={forecast.weather}
        />
      ))}
    </View>
  );
};

WeatherList.propTypes = {
  forecasts: PropTypes.array
};

WeatherList.defaultProps = {
  forecasts: []
};

export default WeatherList;
