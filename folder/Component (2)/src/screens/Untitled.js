import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.welcomeFarmer}>Welcome Farmer</Text>
      </View>
      <Text style={styles.dashboard}>Dashboard</Text>
      <View style={styles.rect}>
        <View style={styles.weatherRow}>
          <Text style={styles.weather}>Weather</Text>
          <Image
            source={require("../assets/images/weather.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <Text style={styles.temperature}>Temperature</Text>
          <Image
            source={require("../assets/images/temperature_(1).png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.humidity}>Humidity</Text>
          <Image
            source={require("../assets/images/humidity.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
      </View>
      <View style={styles.rect4StackRow}>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <Text style={styles.soilMoisture}>Soil Moisture</Text>
          </View>
          <Image
            source={require("../assets/images/soil-moisture-monitoring-black-linear-icon-vector-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.motorSwitchStack}>
            <Text style={styles.motorSwitch}>Motor Switch</Text>
            <Text style={styles.on3}>ON</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon3Row}>
          <EntypoIcon
            name="dots-three-horizontal"
            style={styles.icon3}
          ></EntypoIcon>
          <Text style={styles.settingsMore}>Settings &amp; More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(163,163,176,0.38)"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  welcomeFarmer: {
    fontFamily: "albert-sans-700",
    color: "rgba(58,100,6,1)",
    fontSize: 25,
    marginLeft: 14,
    marginTop: 7
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 20,
    marginRight: 104
  },
  dashboard: {
    fontFamily: "albert-sans-600",
    color: "rgba(58,100,6,1)",
    fontSize: 25,
    marginTop: 14,
    marginLeft: 27
  },
  rect: {
    width: 327,
    height: 120,
    backgroundColor: "rgba(184,233,134,1)",
    borderRadius: 12,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 20
  },
  weather: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 20
  },
  image4: {
    width: 92,
    height: 74,
    marginLeft: 122
  },
  weatherRow: {
    height: 74,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 20,
    marginTop: 14
  },
  rect2: {
    width: 159,
    height: 90,
    backgroundColor: "rgba(184,233,134,1)",
    borderRadius: 12
  },
  temperature: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 16
  },
  image: {
    width: 34,
    height: 50,
    marginLeft: 115
  },
  rect3: {
    width: 159,
    height: 90,
    backgroundColor: "rgba(184,233,134,1)",
    borderRadius: 12,
    marginLeft: 9
  },
  humidity: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 14
  },
  image2: {
    width: 34,
    height: 50,
    marginLeft: 109
  },
  rect2Row: {
    height: 90,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 20,
    marginRight: 28
  },
  rect4: {
    top: 0,
    left: 0,
    width: 159,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(184,233,134,1)",
    borderRadius: 12
  },
  soilMoisture: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    height: 20,
    width: 106,
    fontSize: 17,
    textAlign: "center",
    marginTop: 13,
    marginLeft: 16
  },
  image3: {
    top: 33,
    left: 101,
    width: 60,
    height: 50,
    position: "absolute"
  },
  rect4Stack: {
    width: 161,
    height: 90
  },
  button2: {
    width: 159,
    height: 90,
    backgroundColor: "rgba(184,233,134,1)",
    borderRadius: 12,
    marginLeft: 7
  },
  motorSwitch: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "albert-sans-700",
    color: "#121212",
    height: 25,
    width: 123,
    fontSize: 18,
    textAlign: "center"
  },
  on3: {
    top: 23,
    left: 41,
    position: "absolute",
    fontFamily: "albert-sans-700",
    color: "#121212",
    height: 28,
    width: 46,
    fontSize: 20,
    textAlign: "center"
  },
  motorSwitchStack: {
    width: 123,
    height: 51,
    marginTop: 13,
    marginLeft: 20
  },
  rect4StackRow: {
    height: 90,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 28
  },
  button: {
    width: 327,
    height: 46,
    backgroundColor: "rgba(121,248,219,0.74)",
    borderRadius: 13,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 24
  },
  icon3: {
    color: "rgba(18,18,18,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  settingsMore: {
    fontFamily: "albert-sans-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 14,
    marginTop: 6
  },
  icon3Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 133,
    marginLeft: 16,
    marginTop: 6
  }
});

export default Untitled;
