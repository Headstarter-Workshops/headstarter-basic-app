import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: "space-around",
    marginTop: 20,
  },
  textInput: {
    fontWeight: "700",
    borderWidth: 1.5,
    borderRadius: 3,
    marginTop: 5,
    fontSize: 20,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 5,
  },
});

const SendEmail = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textLabel}>Enter Recipient's Email Address:</Text>
      <TextInput style={styles.textInput} placeholder="someone@anyemail.com" />
    </View>
  );
};

export default SendEmail;
