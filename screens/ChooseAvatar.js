import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Input from "../components/Input";

const Avatar = (props) => {
  return (
    <View>
      <Image style={styles.Image} source={require("../")} />
      <Input></Input>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: "100px",
    width: "100px",
  },
});

export default Avatar;
