import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionList = ({ transactions }) => (
  <View style={styles.transactionList}>
    {transactions.map((transaction, index) => (
      <View key={index} style={styles.transaction}>
        <Text style={styles.transactionName}>{transaction.name}</Text>
        <Text style={styles.transactionAmount}>{transaction.amount}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  transactionList: {
    marginTop: 20,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  transactionName: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionList;
