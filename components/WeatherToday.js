import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const WeatherToday = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.datetime}>Wed, 11 Jan 2017 01:00 PM SGT</Text>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.temperature}>82</Text>
      </View>
      <Text style={styles.weather}>ThunderStorm</Text>
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

export default WeatherToday;
