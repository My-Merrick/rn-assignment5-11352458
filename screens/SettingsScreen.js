import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const scheme = useColorScheme();

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <ScrollView
      contentContainerStyle={
        isDarkMode || scheme === "dark"
          ? styles.containerDark
          : styles.containerLight
      }
    >
      <Text
        style={[
          isDarkMode || scheme === "dark" ? styles.textDark : styles.textLight,
          styles.header,
        ]}
      >
        Settings
      </Text>
      <TouchableOpacity style={styles.option}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.optionTextDark
              : styles.optionTextLight
          }
        >
          Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.optionTextDark
              : styles.optionTextLight
          }
        >
          My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.optionTextDark
              : styles.optionTextLight
          }
        >
          Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.optionTextDark
              : styles.optionTextLight
          }
        >
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.optionTextDark
              : styles.optionTextLight
          }
        >
          Privacy Policy
        </Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text
          style={
            isDarkMode || scheme === "dark"
              ? styles.switchTextDark
              : styles.switchTextLight
          }
        >
          Theme
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  containerDark: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },
  textLight: {
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  option: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionTextLight: {
    color: "#000",
    fontSize: 18,
  },
  optionTextDark: {
    color: "#fff",
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  switchTextLight: {
    color: "#000",
    fontSize: 18,
  },
  switchTextDark: {
    color: "#fff",
    fontSize: 18,
  },
});
