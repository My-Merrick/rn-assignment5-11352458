import { StyleSheet } from "react-native";

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export { lightTheme, darkTheme };
