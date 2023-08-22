import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height/6;

export const StoriesComponent = (props) => {
  return (
    <View style={{ flex: 1, width: 100, height: windowHeight, }}>
          <Image
            source={props.image}
            style={{ borderRadius: 50, width: 70, height: 70, resizeMode:'contain', borderWidth: 2, borderColor: props.color, alignSelf: "center" }}
          />
          <Text style={{ color: "#fff", textAlign: "center" }}> {props.nomEvenement} </Text>
    </View>
  );
};
