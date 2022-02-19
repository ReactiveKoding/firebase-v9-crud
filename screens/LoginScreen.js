import { View, Text, TextInput, Button, AppState } from "react-native";
import React, { useState } from "react";
import { collection, doc, getDoc, setDoc, addDoc } from "firebase/firestore";

import { db } from "../firebase";

export default function LoginScreen({ navigation }) {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRef = collection(db, "users");

  const loginHandler = async () => {
    console.log("login - start");

    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // if password matches log em in
      if (docSnap.data().password === password) {
        console.log("login successful");
        if (docSnap.data().client) {
          navigation.navigate("ClientHome");
        } else {
          navigation.navigate("Home");
        }
      } else {
        // if not <something>
        console.log("login unsuccessful");
      }
    } else {
      // if email isn't in db <something>
      console.log("login unsuccessful");
    }
  };

  const registerHandler = async () => {
    console.log("registering");

    try {
      // see if the email is being used
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("email exists");
      } else {
        // if it doesn't, make account
        await setDoc(doc(db, "users", email), {
          email: email,
          password: password,
        });
      }
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  };

  return (
    <View>
      <Text>Login / Register</Text>
      <View>
        <Text>Email</Text>
        <TextInput onChangeText={setEmail} value={email} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput onChangeText={setPassword} value={password} />
      </View>
      <Button title="Login" onPress={loginHandler} />
      <Button title="Register" onPress={registerHandler} />
    </View>
  );
}
