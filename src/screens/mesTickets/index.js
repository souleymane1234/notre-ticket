import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Dimensions,
  Modal,
  Alert,
  StyleSheet,
  Pressable,
  TouchableHighlight
} from "react-native";
// import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MesTickets({ navigation, route }) {
  return (
    <SafeAreaView style={{backgroundColor: '#12222e', height: windowHeight, width: windowWidth }}>
      <View style={{margin: 10}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, textAlign: "center"}}>Vos différents tickets</Text>
      </View>
      {/* box 1 start */}
      <TouchableOpacity style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="ticket-outline"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Evenement</Text>
        </View>
      </TouchableOpacity>
      {/* box 1 end */}
      {/* box 2 start */}
      <TouchableOpacity style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="ticket-outline"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Sport</Text>
        </View>
      </TouchableOpacity>
      {/* box 2 end */}
      {/* box 3 start */}
      <TouchableOpacity style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="ticket-outline"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Cinema</Text>
        </View>
      </TouchableOpacity>
      {/* box 3 end */}
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "70%",
    height: "47%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
