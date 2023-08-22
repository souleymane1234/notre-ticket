import React, { useState }  from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height/6;

export const BottomBarComponent = ({ props }) => {
    const navigation = useNavigation();
    const [home, setHome] = useState(true);
    const [evenement, setEvenement] = useState(false);
    const [cinema, setCinema] = useState(false);
    const [sport, setSport] = useState(false);
    const [profil, setProfil] = useState(false);
  return (
        <View
      style={{
        height: 50,
        backgroundColor: "#12222e",
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 10,
        zIndex: 2,
        width: "100%",
        position: "absolute",
        bottom: 0,
        flex: 1,
        right: 0,
        left: 0,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {home == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(true);
              setEvenement(false);
            }}
          >
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Acceuil</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
            navigation.navigate("HomeScreen");
              setEvenement(false);
            }}
          >
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Acceuil</Text>
          </TouchableOpacity>
        )}
      </View>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
        {evenement == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(false);
              setEvenement(true);
                navigation.navigate("EvenementScreen")
            }}
          >
            <Icon
              size={25}
              name="bus"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Evenement</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => { [setHome(true), setEvenement(false),navigation.navigate("EvenementScreen")] }}
          >
            <Icon
              size={25}
              name="bus"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Evenement</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
        {sport == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Sport</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(true);
              navigation.navigate("SportScreen")
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Sport</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {cinema == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Cinema</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(true);
              navigation.navigate("CinemaScreen")
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="theater"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Cinema</Text>
          </TouchableOpacity>
        )}

      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {profil == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Profil</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(true);
              navigation.navigate("ProfilScreen")
            }}
          >
            <Icon
              size={25}
              name="account-circle"
              pack="material"
               style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Profil</Text>
          </TouchableOpacity>
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
    bottomBarIconActif: {
      alignSelf: 'center',
      color:"#f2f2f2"
    },
    BottomBarTextActif: {
      color: "#f2f2f2", 
      fontSize: 12
    },
    bottomBarIconNoActif: {
      alignSelf: 'center',
      color:"#f2f2f2",
      opacity: 0.3
    },
    BottomBarTextNoActif: {
      color: "#f2f2f2", 
      fontSize: 12,
      opacity: 0.3
    }

});