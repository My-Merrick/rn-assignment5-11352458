import React, { useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Switch value={theme === "dark"} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ThemeToggle;
