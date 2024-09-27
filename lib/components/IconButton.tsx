import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IconButton = ({
  onPress: onPress,
  iconName: iconName,
}: {
  onPress: () => void;
  iconName: string;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "flex-end",
        alignContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "flex-end",
      }}
    >
      <Icon name={iconName} size={30} color="#4285F4" />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
