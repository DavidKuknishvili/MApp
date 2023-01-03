import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { FirebaseMAuth } from "../../firebase-config";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

import SVGProfileP from "../../assets/icons/profileP";
import SVGLogOut from "../../assets/icons/LogOut";

import { Dimensions } from "react-native";

import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

export default function ProfileL({ route }) {
  const { dname } = route;
  const navigation = useNavigation();

  const [getname, setname] = React.useState(dname);

  const [email, setemail] = React.useState("");

  const [image, setImage] = React.useState(null);

  const logout = () => {
    signOut(FirebaseMAuth)
      .then(() => {
        navigation.navigate("Profile");
      })
      .catch((error) => {});
  };

  onAuthStateChanged(FirebaseMAuth, (user) => {
    if (user) {
      setname(user.displayName);
      setemail(user.email);
      if (user.photoURL != null) {
        setImage(user.photoURL);
      }
    } else {
    }
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateProfile(FirebaseMAuth.currentUser, {
        photoURL: result.uri,
      })
        .then(() => {
          setImage(result.uri);
        })
        .catch((error) => {});
    }
  };

  return (
    <View style={styles.mainConatiner}>
      <View style={styles.infocontainer}>
        <TouchableOpacity onPress={pickImage} style={styles.profileBorder}>
          {image === null ? (
            <SVGProfileP />
          ) : (
            <Image
              style={{ width: 130, height: 130, borderRadius: 555 }}
              source={{ uri: image }}
            />
          )}
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          {getname}
        </Text>
        <Text style={{ color: "#ffffff60" }}>{email}</Text>
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          logout();
        }}
      >
        <SVGLogOut />
        <Text style={{ marginLeft: 20, color: "#fff", fontSize: 16 }}>
          LogOut
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "#1A1A1D",
  },
  profileBorder: {
    borderRadius: 150,
    borderColor: "#DB434650",
    borderWidth: 2,
    borderStyle: "dashed",
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  infocontainer: {
    width: width,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginTop: height / 10,
    marginBottom: height / 4,
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ffffff20",
    alignItems: "center",
    margin: 25,
  },
});
