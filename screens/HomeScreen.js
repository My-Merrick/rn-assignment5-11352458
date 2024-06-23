import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const scheme = useColorScheme();

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const handleSellAll = () => {
    // Logic for handling sell all functionality
    alert("Sell All clicked");
  };

  return (
    <ScrollView
      contentContainerStyle={
        isDarkMode || scheme === "dark"
          ? styles.containerDark
          : styles.containerLight
      }
    >
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./../assets/profile.png")}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={
                isDarkMode || scheme === "dark"
                  ? styles.textDark
                  : styles.textLight
              }
            >
              Welcome back,
            </Text>
            <Text
              style={[
                isDarkMode || scheme === "dark"
                  ? styles.textDark
                  : styles.textLight,
                styles.textBold,
              ]}
            >
              Eric Atsu
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchContainer}>
          <Image
            source={require("./../assets/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require("./../assets/Card.png")} style={styles.card} />
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("./../assets/send.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("./../assets/recieve.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("./../assets/loan.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("./../assets/topUp.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsHeaderText}>Transaction</Text>
        <TouchableOpacity onPress={handleSellAll}>
          <Text style={styles.sellAllText}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transaction}>
        <Image
          source={require("./../assets/apple.png")}
          style={styles.transactionIcon}
        />
        <Text style={styles.transactionText}>Apple Store</Text>
        <Text style={styles.transactionAmount}>- $5.99</Text>
      </View>

      <View style={styles.transaction}>
        <Image
          source={require("./../assets/spotify.png")}
          style={styles.transactionIcon}
        />
        <Text style={styles.transactionText}>Spotify</Text>
        <Text style={styles.transactionAmount}>- $12.99</Text>
      </View>

      <View style={styles.transaction}>
        <Image
          source={require("./../assets/moneyTransfer.png")}
          style={styles.transactionIcon}
        />
        <Text style={styles.transactionText}>Money Transfer</Text>
        <Text style={styles.transactionAmount}>+ $300</Text>
      </View>

      <View style={styles.transaction}>
        <Image
          source={require("./../assets/grocery.png")}
          style={styles.transactionIcon}
        />
        <Text style={styles.transactionText}>Grocery</Text>
        <Text style={styles.transactionAmount}>- $88</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Dark Mode</Text>
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
    paddingBottom: 20,
  },
  containerDark: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  textLight: {
    color: "#808080",
    fontSize: 18,
  },
  textDark: {
    color: "#808080",
    fontSize: 18,
  },
  textBold: {
    fontWeight: "bold",
  },
  searchContainer: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#808080",
  },
  cardContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  card: {
    width: 320,
    height: 180,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  actionText: {
    color: "#808080",
    fontSize: 16,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  transactionsHeaderText: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "bold",
  },
  sellAllText: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionText: {
    color: "#808080",
    fontSize: 16,
    flex: 1,
  },
  transactionAmount: {
    color: "#808080",
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  switchText: {
    color: "#808080",
    fontSize: 16,
    marginRight: 10,
  },
});
