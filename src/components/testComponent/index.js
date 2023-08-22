import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, Dimensions, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height/3.2;
const heightImage = windowHeight/1.6

export const EventTemplate = (props) => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", width: 150, borderRadius: 5, margin: 10, height: windowHeight }}>
        <ImageBackground
            source={{
                        uri: props.image,
                    }}
            resizeMode="cover" style={{ flex: 1, width: "100%", height: heightImage, resizeMode:'contain'}}>

        </ImageBackground>
        <View style={{margin: 10, top: 10}}>
            <Text style={{color: "#000", fontSize: 12, textAlign: "center"}}>
                {props.nom}
            </Text>
        </View>
        <View style={{margin: 10}}>
            <Text style={{color: "#53c6ea", fontWeight: "bold", fontSize: 16, textAlign: "center"}}>
                {props.prixStandart}
            </Text>
        </View>
          {/* <Image
            source={{
                  uri: props.image,
                }}
            style={{ width: 182, height: 182, borderRadius: 10 }}
          />
          <Text style={{textAlign: "center"}}> {props.nom} </Text> */}
    </View>
  );
};
