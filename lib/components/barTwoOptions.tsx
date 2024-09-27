import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BarTwoOptions = ({
  backgroundColor: backgroundColor,
  iconName: iconName,
  iconColor: iconColor,
  onPress,
}: {
  backgroundColor: string;
  iconName: string;
  iconColor: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 95,
        height: 65,
        backgroundColor: backgroundColor,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon
        name={iconName}
        size={20}
        onPress={() => console.log("SearchIcon pressed")}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default BarTwoOptions;

const styles = StyleSheet.create({});
