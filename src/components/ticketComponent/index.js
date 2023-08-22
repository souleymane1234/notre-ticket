import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export const TicketComponent = (props) => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          width: "95%",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 10,
        }}
      >
        <View style={{ margin: 10 }}>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {props.nom}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="calendar-range"
              size={15}
              color="#1c78ef"
              pack="material"
              style={{ alignSelf: "center" }}
            />
            <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
              
              <Text style={{ fontSize: 14 }}>{props.date} à {props.heure}</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="map-marker"
                size={15}
                color="#1c78ef"
                pack="material"
                style={{ alignSelf: "center" }}
              />
              <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
                <Text style={{ fontSize: 12 }}>{props.nomLieu}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{ fontSize: 12, color: "#1c78ef", fontWeight: "bold" }}
              >
                {props.prixStandard}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Image
            source={{
                  uri: props.image,
                }}
            style={{ width: 90, height: "100%" }}
          />
        </View>
      </View>
    </View>
  );
};
