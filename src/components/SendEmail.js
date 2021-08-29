import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import emailjs from "emailjs-com";

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: "space-around",
    marginTop: 20,
  },
  textInput: {
    fontWeight: "300",
    borderWidth: 1.5,
    borderRadius: 3,
    marginTop: 5,
    fontSize: 15,
    padding: 5,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 20,
    borderRadius: 4,
    elevation: 3,
    color: "pink",
    backgroundColor: "skyblue",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

const SendEmail = ({ people }) => {
  function sendTheEmail(values) {
    emailjs
      .send(
        "service_80tyfat",
        "template_tip_split",
        values,
        "user_ojgAjTwkWMfLLXF12qEII"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  console.log(people);
  return (
    <View style={styles.viewContainer}>
      <Formik
        initialValues={{
          from_name: "",
          to_name: "",

          venmo_user: "",
          email: "",
          split_amount: "000",
        }}
        onSubmit={(values) => {
          // console.log(values);
          sendTheEmail(values);
          values.split_amount = "6000";
        }}
      >
        {(formikprops) => (
          <View>
            // here we could put the number of emails we have left
            <Text style={styles.textLabel}>Enter Your Name:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your Name"
              onChangeText={formikprops.handleChange("from_name")}
              value={formikprops.values.from_name}
            />
            {Array.from({ length: people }).map((_, idx) => (
              <>
                <Text style={styles.textLabel}>Enter Recipient's Name:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Recipient's Name"
                  onChangeText={formikprops.handleChange("to_name")}
                  value={formikprops.values.to_name}
                />

                <Text style={styles.textLabel}>Your venmo username:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Your venmo name"
                  onChangeText={formikprops.handleChange("venmo_user")}
                  value={formikprops.values.venmo_user}
                />

                <Text style={styles.textLabel}>
                  Enter Recipient's Email Address:
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="someone@anyemail.com"
                  onChangeText={formikprops.handleChange("email")}
                  value={formikprops.values.email}
                />
              </>
            ))}
            <TouchableOpacity
              style={styles.button}
              title="submit"
              onPress={formikprops.handleSubmit}
            >
              <Text style={styles.textButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SendEmail;
