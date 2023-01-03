import {
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SVGempty from "../../assets/icons/empty";

import { Dimensions } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { FirebaseMAuth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import TicketCard from "../../components/TicketCard";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const { width, height } = Dimensions.get("window");

export default function TicketScreen() {
  const [userUID, setUserUID] = React.useState(null);
  onAuthStateChanged(FirebaseMAuth, (user) => {
    if (user) {
      setUserUID(user.uid);
    }
  });
  
  let bookingItemList = [];

  const db = getDatabase();
  const starCountRef = ref(db, "booking/" + `${userUID}/`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    snapshot.forEach((grandchildSnapshot) => {
      let item = grandchildSnapshot.val();
      item.key = grandchildSnapshot.key;

      bookingItemList.push(item);
    });
  });

  let uniqueItems = bookingItemList.filter((x, i, a) => a.indexOf(x) == i);
  const CardItem = ({ item }) => {
    return <TicketCard item={item} />;
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.mainConatiner}>
      {bookingItemList.length === 0 || userUID === null ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={"#ffffff80"}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View
            style={{ display: "flex", alignItems: "center", marginTop: 25 }}
          >
            <Text style={{ fontSize: 15, color: "#ffffff25" }}>
              Scroll down to refresh
            </Text>
            <Text style={{ fontSize: 15, color: "#ffffff50" }}>↓</Text>
          </View>
          <View
            style={{
              display: "flex",
              height: height - 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: "30",
                display: "flex",
                textAlign: "center",
                marginBottom: 30,
              }}
            >
              Empty
            </Text>

            <SVGempty />
            <Text
              style={{
                color: "#ffffff40",
                fontWeight: "200",
                fontSize: "17",
                display: "flex",
                textAlign: "center",
                marginBottom: 30,
              }}
            >
              You do not have any booked ticket
            </Text>
          </View>
        </ScrollView>
      ) : (
        <>
          <Text style={styles.header}>TICKETS</Text>
          <FlatList
            style={{ marginBottom: 72 }}
            refreshControl={
              <RefreshControl
                tintColor={"#ffffff50"}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            renderItem={CardItem}
            data={uniqueItems}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "#1A1A1D",
  },
  header: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#fff",
    padding: 25,
    paddingBottom: 25,
  },
});
