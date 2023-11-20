import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../../screens/firebase";
import Header from "../Components/Home/Header";

export default function Profile() {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{ padding: 20, backgroundColor: "#fff", flex: 1, marginTop: 20 }}
    >
      <Header />
      <Text
        style={{
          paddingTop: 20,
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "raleway-bold",
        }}
      >
        User Name
      </Text>
      <Text>Email:{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  button: {
    backgroundColor: "#87ceeb",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
