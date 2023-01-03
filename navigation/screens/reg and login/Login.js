import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseMAuth } from "../../../firebase-config";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const navigation = useNavigation();

  const [focuse, setfocuse] = React.useState(0);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    signInWithEmailAndPassword(FirebaseMAuth, email, password)
      .then((userCredential) => {
        navigation.navigate("ProfileL");

        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/user-not-found") {
          setfocuse(10);
        } else if (errorCode == "auth/wrong-password") {
          setfocuse(20);
        }
      });
  };

  return (
    <View style={styles.mainConatiner}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          height: height,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 30,
          }}
        >
          Log In
        </Text>
        <TextInput
          style={[
            styles.inp,
            {
              borderColor:
                focuse == 10
                  ? "#DB4346"
                  : focuse == 1
                  ? "#ffffff60"
                  : "transparent",
              borderWidth: 1,
            },
          ]}
          onFocus={() => setfocuse(1)}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={"#fff5"}
        />
        <TextInput
          style={[
            styles.inp,
            {
              borderColor:
                focuse == 20
                  ? "#DB4346"
                  : focuse == 2
                  ? "#ffffff60"
                  : "transparent",
              borderWidth: 1,
            },
          ]}
          onFocus={() => setfocuse(2)}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor={"#fff5"}
        />
        <TouchableOpacity
          onPress={() => {
            login();
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#DB4346", "#AA2828"]}
            style={{
              height: 60,
              width: 200,
              borderRadius: 20,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "#1A1A1D",
  },
  inp: {
    backgroundColor: "#fff1",
    paddingStart: 15,
    width: width - 60,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    color: "#fff",
  },
});
