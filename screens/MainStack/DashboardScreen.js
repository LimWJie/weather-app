import React, { Component } from "react";
import { View, Text } from "react-native";

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
        <Text>Dashboard</Text>
      </View>
    );
  }
}
