import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BarThreeOptions = ({
  heading: heading,
  secondText: secondText,
  textColor: textColor,
  iconName: iconName,
  iconColor: iconColor,
  iconBgColor: iconBgColor,
}: {
  heading: string;
  secondText: string;
  textColor: string;
  iconName: string;
  iconBgColor: string;
  iconColor: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: "#1F1F1F",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 20,
        borderColor: "grey",
        height: 90,
        width: 180,
        padding: 10,
        marginRight: 5,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <Text style={[{ color: textColor }]}>{heading}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{secondText}</Text>
        <Icon
          name={iconName}
          color={iconColor}
          size={15}
          style={[
            {
              backgroundColor: iconBgColor,
              padding: 2,
              borderRadius: 100,
              justifyContent: "center",
            },
          ]}
        />
      </View>
    </View>
  );
};

export default BarThreeOptions;

const styles = StyleSheet.create({});
