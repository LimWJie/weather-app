import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import WeatherListItem from "./WeatherListItem";

const WeatherList = props => {
  const renderItem = ({ item }) => {
    const { datetime, tempHigh, tempLow, weather } = item;
    return (
      <WeatherListItem
        datetime={datetime}
        tempLow={tempLow}
        tempHigh={tempHigh}
        weather={weather}
      />
    );
  };

  return (
    <FlatList
      data={props.forecasts}
      keyExtractor={(item, index) => `${index}`}
      renderItem={renderItem}
    />
  );
};

WeatherList.propTypes = {
  forecasts: PropTypes.array
};

WeatherList.defaultProps = {
  forecasts: []
};

export default WeatherList;
