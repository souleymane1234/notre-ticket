import React from "react";
import { View, Text, Image, Dimensions, ImageBackground } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height/3.2;
const heightImage = windowHeight/1.6

export const TopBoxComponent = (props) => {
    // const img = props.image
  return (

    <View style={{flex: 1, backgroundColor: "#fff", width: 150, borderRadius: 5, margin: 10, height: windowHeight}}>
        {/* <ImageBackground source={{ uri: img }} resizeMode="cover" style={{ flex: 1, width: "100%", height: heightImage, resizeMode:'contain'}}>

        </ImageBackground> */}
        {/* <Image
            style={{ width: "100%", height: heightImage, resizeMode:'contain' }}
            source={{ 
                uri:props.image
            }}
        /> */}
        <View style={{margin: 10, top: 10}}>
            <Text style={{color: "#000", fontSize: 12}}>
                {/* {props.nom} */} ok
            </Text>
        </View>
        <View style={{margin: 10}}>
            <Text style={{color: "#53c6ea", fontWeight: "bold", fontSize: 16}}>
                {/* {props.prixStandart} */} ok
            </Text>
        </View>
        {/* ancien modele avec les etoiles de notations start */}
        {/* <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Text style={{color: "#f2cb5e"}}>
                {props.note}
            </Text>
            <Text style={{color: "#fff"}}>
                {props.prix}
            </Text>
        </View> */}
        {/* ancien modele avec les etoiles de notations end */}

    </View>
  );
};
