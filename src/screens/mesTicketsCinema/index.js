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
import { TicketComponent } from "../../components/ticketComponent";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MesTicketsCinema({ navigation, route }) {
  const { idUser } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [dataTicket, setDataTicket] = React.useState();
  const [dataTicketTransport, setDataTicketTransport] = React.useState();
  const [masterData, setMasterData] = React.useState();
  const [search, setsearch] = React.useState();
  const [id, setId] = React.useState('')
//   const { id, data, Token} = route.params;

React.useEffect(() => {
var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Encoding", "gzip, deflate");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://pleasant-shirt-bass.cyclic.app/api/allTicket", requestOptions)
  .then(response => response.json())
  .then(result => {
    setDataTicket(result)
  })
  .catch(error => console.log('error', error));
}, [])
  React.useEffect(() => {
    setsearch(idUser);
    if (idUser) {
      console.debug("search text ", idUser);
      let newData = dataTicket?.filter((item) => { const itemData = item.usersId; const textData = idUser; return itemData.includes(textData);})
      console.debug("new data ", newData);
      setMasterData(newData)
      console.log('master data', masterData);
    } else {
      setDataTicket(dataTicket);
    }
  }, [dataTicket])

      const renderItemsConcert = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => [setId(item._id), setModalVisible(true)]} underlayColor="none">
      <TicketComponent
          DataEvent={item}
          idEvent={item._id}
          nom={item.nom}
          image={item.image}
          date={item.date}
          heure={item.heure}
          nomLieu={item.nomLieu}
          prixStandard={item.prixStandard}
        />
      </TouchableHighlight>

    )
  }
  console.log("item._id", id)

    let Loader;
  if (dataTicket) {
    Loader = (
      <OrientationLoadingOverlay
        visible={false}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Veillez patienter un moment!!"
      />
    );
  } else {
    Loader = (
      <OrientationLoadingOverlay
        visible={true}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Veillez patienter un moment!!"
      />
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: windowHeight, width: windowWidth }}>
      {Loader}
      <View style={{ flex: 1 }}>
        <Text style={{ margin: 10, fontWeight: "bold", fontSize: 18 }}>
          Mes tickets
        </Text>
        {masterData?.length == 0 ? (
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
              Vous n'avez pas de ticket
            </Text>
          ) : (
            <Text></Text>
          )}
        <FlatList
          style={{marginBottom: 30}}
          data={masterData}
          keyExtractor={(item) => item._id}
          renderItem={renderItemsConcert}
        />
      </View>
          {/* <View style={styles.centeredView}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
          style={{
            width: 200,
            height: 200,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginBottom: 10
          }}
          borderRadius={10}
          source={{uri: "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + id + "&choe=UTF-8"}}
        />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermez</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View> */}
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
