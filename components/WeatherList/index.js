import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import WeatherListItem from "./WeatherListItem";

const forecasts = [0, 1, 2, 3, 4];

const WeatherList = props => {
  return (
    <View>
      {forecasts.map((forecast, index) => (
        <WeatherListItem key={index} />
      ))}
    </View>
  );
};

WeatherList.propTypes = {};

export default WeatherList;
