import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface SearchTextProps {
  onPress: () => void; // Define the type of onPress prop
}

const SearchText = ({ onPress }: SearchTextProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          width: 220,
          color: "#9A9B9D",
          fontSize: 35,
          paddingHorizontal: 10,
          marginHorizontal: 10,
        }}
      >
        Search
      </Text>
    </TouchableOpacity>
  );
};

export default SearchText;

const styles = StyleSheet.create({});
