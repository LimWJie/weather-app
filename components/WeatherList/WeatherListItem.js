import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/helpers";

const WeatherListItem = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.datetime}>{formatDate(props.datetime)}</Text>
        <Text style={styles.temperatureRange}>
          {props.tempLow.toFixed(0)} - {props.tempHigh.toFixed(0)}
        </Text>
        <Text style={styles.weather}>{props.weather}</Text>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={24}
        color="#EE4D3B"
        style={{ alignSelf: "center", padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingLeft: 20,
    paddingBottom: 22,
    borderBottomColor: "rgba(160, 160, 160, 0.3)",
    borderBottomWidth: 1
  },
  datetime: {
    fontWeight: "bold",
    fontSize: 14
  },
  temperatureRange: {
    fontSize: 14
  },
  weather: {
    fontSize: 12,
    color: "#A0A0A0"
  }
});

WeatherListItem.propTypes = {
  datetime: PropTypes.number,
  tempLow: PropTypes.number,
  tempHigh: PropTypes.number,
  weather: PropTypes.string
};

export default WeatherListItem;
