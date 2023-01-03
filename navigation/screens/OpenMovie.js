import {
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Dimensions,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import SVGPlayIcon from "../../assets/icons/play";
import Moment from "moment";
import SVGBookingIcon from "../../assets/icons/booking";
import { LinearGradient } from "expo-linear-gradient";
import SVGCloseIcon from "../../assets/icons/close";
import YoutubePlayer from "react-native-youtube-iframe";
import { movieTrailerId } from "../../Api";
import { ref, onValue } from "firebase/database";

import { FirebaseMAuth } from "../../firebase-config";
import { getDatabase, ref as sRef, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
const { width, height } = Dimensions.get("window");

export default function OpenMovie({ route }) {
  const { item, fromScreen } = route.params;

  const [trailer, settrailers] = React.useState([]);
  const [movieid, stemovieid] = React.useState(item.id);

  const fetchData = async (movieid) => {
    const trailerId = await movieTrailerId(movieid);
    settrailers(trailerId);
  };

  if (trailer.length === 0) {
    fetchData(movieid);
  }
  const k = trailer.trailersKey;

  let genres = [];

  for (let i = 0; i < item.genres.length; i++) {
    genres.push({
      id: i,
      genre: item.genres[i],
    });
  }
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#252529",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
          paddingTop: 10,
          borderRadius: 50,
          marginRight: 5,
        }}
      >
        <Text style={{ color: "#fff" }}>{item.genre}</Text>
      </TouchableOpacity>
    );
  };

  const [content, setContent] = React.useState(
    <Image
      style={{ width: width, height: height / 1.5, position: "absolute" }}
      source={{ uri: item.image }}
    />
  );

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      setContent(
        <Image
          style={{ width: width, height: height / 1.5, position: "absolute" }}
          source={{ uri: item.image }}
        />
      );
    }
  }, []);

  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const [userUID, setUserUID] = React.useState(null);
  onAuthStateChanged(FirebaseMAuth, (user) => {
    if (user) {
      setUserUID(user.uid);
    }
  });

  const [alreadyBooked, setAlreadyBooked] = React.useState(false);

  const bookingHandler = () => {
    if (userUID !== null){

      setAlreadyBooked(true);
      const db = getDatabase();
      set(sRef(db, "booking/" + `${userUID}/` + `${item.id}`), item)
        .then(() => {})
        .catch((error) => {});
    }
  };

  let [firstRequest, setFirstRequest] = React.useState(0);
  onAuthStateChanged(FirebaseMAuth, (user) => {
    setFirstRequest(firstRequest++);
    if (user) {
      setUserUID(user.uid);
    }
  });

  let bookingItemList = [];

  let uniqueItems = bookingItemList.filter((x, i, a) => a.indexOf(x) == i);

  const db = getDatabase();
  const starCountRef = ref(db, "booking/" + `${userUID}/`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    snapshot.forEach((grandchildSnapshot) => {
      let itemm = grandchildSnapshot.val();
      itemm.key = grandchildSnapshot.key;

      bookingItemList.push(item);

      if (item.id === itemm.id && alreadyBooked === false) {
        setAlreadyBooked(!alreadyBooked);
      }
    });
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1D" }}>
      <View>
        <View style={{ marginTop: 75 }}>
          <YoutubePlayer
            height={500}
            play={playing}
            forceAndroidAutoplay
            videoId={k}
            onChangeState={onStateChange}
          />
        </View>
        {content}
      </View>

      <Animated.View
        style={{
          opacity: fadeAnim,
          position: "absolute",
          zIndex: 1,
          marginTop: height / 5,
          marginLeft: width / 2.8,
          width: 100,
          height: 100,
          backgroundColor: "#1A1A1D",
          justifyContent: "center",
          alignItems: "center",
          opacity: fadeAnim,
          borderRadius: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
            setPlaying((prev) => !prev);

            setContent(null);
          }}
        >
          <SVGPlayIcon />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "absolute",
          bottom: 0,
          height: height,
          width: width,
        }}
      >
        <LinearGradient
          colors={["transparent", "#1A1A1D80", "#1A1A1D"]}
          style={{
            height: height / 2,
            width: width,
          }}
        />

        <View
          style={{
            width: width,
            backgroundColor: "#1A1A1D",
            paddingBottom: 100,
            paddingRight: 20,
            paddingTop: 15,
            paddingLeft: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 35,
                width: 100,
                marginBottom: 20,
                backgroundColor: "orange",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#252529" }}>
                {" "}
                IMDB {item.rating}
              </Text>
            </View>
            <Text
              style={{
                color: "#FFFFFF95",
                height: 35,
                marginLeft: 12,
                fontSize: 15,
              }}
            >
              {Moment(item.releaseDate).format("d MMM yy")}
            </Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={{
              flexDirection: "row",
              width: width,
              marginTop: 25,
              marginBottom: 15,
            }}
          >
            {/* {genres} */}

            <FlatList
              keyExtractor={(item, index) => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={genres}
              renderItem={renderItem}
            />
          </View>

          <Text style={styles.desctription}>{item.description}</Text>
        </View>
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#1A1A1D", "#1A1A1D", "#1A1A1D50"]}
        style={{
          width,
          height: 100,
          position: "absolute",
          bottom: 0,
          width,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {!alreadyBooked ? (
          <TouchableOpacity
            style={{ borderRadius: 50 }}
            onPress={() => bookingHandler()}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#DB4346", "#AA2828"]}
              style={{
                height: 60,
                width: 160,
                borderRadius: 50,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <SVGBookingIcon />
              <Text
                style={{
                  marginStart: 10,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Booking
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ borderRadius: 50 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#818181", "#6E6E6E"]}
              style={{
                height: 60,
                width: 160,
                borderRadius: 50,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <SVGBookingIcon />
              <Text
                style={{
                  marginStart: 10,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Booking
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </LinearGradient>
      <View
        style={{
          position: "absolute",
          marginTop: 15,
          marginLeft: 15,
          backgroundColor: "#1A1A1D",
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (fromScreen === "Home") {
              navigation.navigate("Home");
            } else if (fromScreen === "Discover") {
              navigation.navigate("Discover");
            } else if (fromScreen === "Ticket") {
              navigation.navigate("Ticket");
            }
          }}
        >
          <SVGCloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desctription: {
    color: "#FFFFFF70",
    fontSize: 15,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});
