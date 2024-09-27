import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BarTwoOptions from "../components/barTwoOptions";
import Divider from "../components/divider";
import IconButton from "../components/IconButton";
import SearchText from "../components/searchText";
import BarThreeOptions from "../components/barThreeOptions";
import RSSParser from "react-native-rss-parser";

const Home = ({ navigation }: { navigation: any }) => {
  //const searchLottieRef = useRef<LottieView>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#121212" />
      <ScrollView
        scrollEnabled={true}
        style={{ backgroundColor: "#1F1F1F", height: "100%" }}
        indicatorStyle="black"
        stickyHeaderHiddenOnScroll
        //contentContainerStyle={{ height: "100%" }}
      >
        <View
          style={{
            padding: 5,
          }}
        >
          {/*Top icons bar */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Icon
              name="flask"
              size={25}
              onPress={() => console.log("SearchIcon pressed")}
              color="#4285F4"
            />
            <View
              style={{
                flexDirection: "row",
                //backgroundColor: "red",
                width: 75,
                justifyContent: "space-between",
              }}
            >
              <Icon
                name="bell"
                size={25}
                onPress={() => console.log("BellIcon pressed")}
                color="#4285F4"
              />
              <Icon
                name="face-man-profile"
                size={25}
                onPress={() => console.log("Profile Icon pressed")}
                color="#4285F4"
              />
            </View>
          </View>
          {/* <LottieView autoPlay source={require("../")} /> */}
          <Image
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginHorizontal: 75,
              borderRadius: 5,
            }}
            height={100}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
          />
          <View
            style={{
              paddingVertical: 10,
              alignContent: "center",
              paddingHorizontal: 20,
              borderRadius: 50,
              backgroundColor: "#333438",
              height: 75,
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <Icon
                name="search-web"
                size={30}
                onPress={() => console.log("SearchIcon pressed")}
                color="#4285F4"
              />
              <SearchText onPress={() => navigation.navigate("Search")} />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 85,
                justifyContent: "space-between",
              }}
            >
              <IconButton
                iconName="microphone"
                onPress={() => console.log("Mic pressed")}
              />
              <IconButton
                iconName="google-lens"
                onPress={() => navigation.navigate("Scan")}
              />
            </View>
          </View>
          <View
            style={{
              height: 85,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <BarTwoOptions
              backgroundColor="#51422B"
              iconName="image-search-outline"
              iconColor="#EFBE61"
              onPress={() => navigation.navigate("Scan")}
            />
            <BarTwoOptions
              backgroundColor="#393F4F"
              iconName="translate"
              iconColor="#ACCAFC"
              onPress={() => console.log("Translate started")}
            />
            <BarTwoOptions
              backgroundColor="#374D41"
              iconName="school"
              iconColor="#85D1A7"
              onPress={() => console.log("School started")}
            />
            <BarTwoOptions
              backgroundColor="#614542"
              iconName="music-note"
              iconColor="#FFB1AC"
              onPress={() => navigation.navigate("Modal")}
            />
          </View>
          <Divider />
          <ScrollView
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ justifyContent: "space-around" }}
            // style={{ backgroundColor: "green" }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <BarThreeOptions
                heading="Air Quality • 101"
                secondText="Moderate"
                textColor="white"
                iconName="waves"
                iconColor="black"
                iconBgColor="#FFFF00"
              />
              <BarThreeOptions
                heading="USD/INR +0.044%"
                secondText="83.60"
                textColor="white"
                iconName="arrow-up"
                iconColor="black"
                iconBgColor="#7FCA97"
              />
              <BarThreeOptions
                heading="Bengaluru"
                secondText="23⁰"
                textColor="white"
                iconName="cloud"
                iconColor="white"
                iconBgColor=""
              />
              <BarThreeOptions
                heading="Settings"
                secondText="Customise your space"
                textColor="#B1C0E4"
                iconName=""
                iconColor="#B1C0E4"
                iconBgColor=""
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#303134",
    borderRadius: 24,
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "white",
    fontSize: 16,
  },
  containerOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: "#d3d3d3",
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: "#ffff00", // yellow background
    borderRadius: 15,
    padding: 5,
  },
});

// <LottieView
//           ref={searchLottieRef}
//           style={{ width: 40, height: 45 }} // Same size as CopyButton
//           source={require("../../assets/search.json")}
//           loop={false}
//         />
