import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TopBoxComponent } from '../../components/topBoxComponent';
import { topBoxData } from '../../donnee/topBoxData';
import { BottomBarComponent } from '../../components/bottomBar';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const ProfilScreen = () => {

      const BottomBar = (
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
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Acceuil</Text>
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Home</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              navigation.navigate("HomeScreen")
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
          >
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Acceuil</Text>
            {/* <Text style={[styles.TextIcon, {color: "#f2f2f2"}]}>Home</Text> */}
          </TouchableOpacity>
        )}
      </View>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
        {evenement == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
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
              name="bus"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Evenement</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(true);
              navigation.navigate("EvenementScreen")
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
      </View>
    </View>
  );


  const renderItemTopBox = ({ item }) => {
    return (
      <TopBoxComponent
          nomEvenement={item.nomEvenement}
          image={item.image}
          note={item.note}
          prix={item.prix}
        />

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#12222e" />
    {/* header start  */}
      <View style={styles.header}>
      </View>
      {/* header end  */}
      <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
        <View>
            <Image
                style={{ borderRadius: 60, width: 80, height: 80, resizeMode:'contain' }}
                source={require("../../assets/imgConcert1.jpeg")}
            />
        </View>
        <View style={{justifyContent: "center"}}>
            <Text style={{color: "#fff"}}>Konate souleymane</Text>
            <Text style={{color: "#fff"}}>Konate souleymane</Text>
        </View>
        <View style={{justifyContent: "center"}}>
            <Icon
              size={25}
              color="#fff"
              name="account-cog"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Personnel</Text>
      </View>
      {/* box 1 start */}
      <TouchableOpacity style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="account-cog"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Lyon</Text>
            <Text style={{color: "#717c82"}}>Changer de ville</Text>
        </View>
      </TouchableOpacity>
      {/* box 1 end */}
            {/* box 1 start */}
      <TouchableOpacity style={{backgroundColor: "#34424c", flexDirection: "row", margin: 10, borderRadius: 10, height: 70}}>
        <View style={{justifyContent: "center", margin: 10}}>
            <Icon
              size={25}
              color="#fff"
              name="account-cog"
              pack="material"
              style={{alignSelf: "center"}}
            />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: "center"}}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 5}}>Tickets</Text>
            <Text style={{color: "#717c82"}}>Tous tes tickets achetés</Text>
        </View>
      </TouchableOpacity>
      {/* box 1 end */}
      {BottomBar}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#12222e"
    },
    header:{
        backgroundColor: "#12222e",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    },
    headerView:{
        justifyContent: "center",
        margin: 10
    }
    ,
    headerViewText:{
        color: "#fff",
        fontSize: 18
    },

});

export default ProfilScreen;
