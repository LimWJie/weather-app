import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";

const WeatherToday = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.datetime}>
        {moment(props.datetime).format("ddd, D MMM YYYY hh:mm A")}
      </Text>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.temperature}>{props.temperature}</Text>
      </View>
      <Text style={styles.weather}>{props.weather}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  datetime: {
    fontWeight: "bold",
    fontSize: 18
  },
  temperature: {
    fontSize: 48
  },
  weather: {
    fontSize: 24,
    color: "#A0A0A0"
  }
});

WeatherToday.propTypes = {
  datetime: PropTypes.number,
  temperature: PropTypes.number,
  weather: PropTypes.string
};

export default WeatherToday;
