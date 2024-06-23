import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ cardInfo }) => (
  <View style={styles.card}>
    <Text style={styles.cardNumber}>{cardInfo.number}</Text>
    <View style={styles.cardDetails}>
      <Text style={styles.cardHolder}>{cardInfo.holder}</Text>
      <Text style={styles.expiryDate}>{cardInfo.expiry}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1e",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardNumber: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardDetails: {
    marginTop: 10,
  },
  cardHolder: {
    color: "#ffffff",
    fontSize: 18,
  },
  expiryDate: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default Card;
